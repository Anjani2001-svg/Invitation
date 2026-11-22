import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const script = readFileSync(new URL('../docs/google-apps-script/Code.gs', import.meta.url), 'utf8');
const secret = 'this-is-a-long-random-like-secret-for-unit-tests-001';

const sample = {
  secret,
  Timestamp: '2027-02-01T11:42:00.000Z',
  Name: 'A Guest',
  Phone: "'+94771234567",
  Attending: 'Yes',
  Guests: 2,
  Message: 'Congratulations!',
};

function makeMock({ configuredSecret = secret, headers, lockAvailable = true, spreadsheetId = 'our-spreadsheet' } = {}) {
  const rows = [];
  const errors = [];
  let released = false;
  const names = headers ?? ['Timestamp', 'Name', 'Phone', 'Attending', 'Guests', 'Message'];
  const sandbox = {
    ContentService: {
      MimeType: { JSON: 'application/json' },
      createTextOutput(value) {
        return { body: value, setMimeType() { return this; } };
      },
    },
    PropertiesService: {
      getScriptProperties() {
        return {
          getProperty(name) {
            return name === 'RSVP_SHARED_SECRET' ? configuredSecret :
              name === 'RSVP_SHEET_ID' ? spreadsheetId : null;
          },
        };
      },
    },
    LockService: {
      getScriptLock() {
        return {
          tryLock() { return lockAvailable; },
          releaseLock() { released = true; },
        };
      },
    },
    SpreadsheetApp: {
      openById(id) {
        assert.equal(id, spreadsheetId);
        return {
          getSheetByName(name) {
            assert.equal(name, 'RSVPs');
            return {
              getRange() { return { getDisplayValues() { return [names]; } }; },
              appendRow(values) { rows.push(Array.from(values)); },
            };
          },
        };
      },
      flush() {},
    },
    console: { error(...args) { errors.push(args); } },
  };
  runInNewContext(script, sandbox);
  const send = (payload) => JSON.parse(sandbox.doPost({ postData: { contents: JSON.stringify(payload) } }).body);
  return { send, rows, errors, get released() { return released; } };
}

test('Apps Script appends one correctly ordered RSVP and confirms it', () => {
  const backend = makeMock();
  assert.deepEqual(backend.send(sample), { ok: true });
  assert.deepEqual(backend.rows, [[
    sample.Timestamp, sample.Name, sample.Phone, sample.Attending, sample.Guests, sample.Message,
  ]]);
  assert.equal(backend.released, true);
});

test('Apps Script rejects wrong secret and leaves sheet unchanged', () => {
  const backend = makeMock();
  assert.deepEqual(backend.send({ ...sample, secret: 'not-the-secret' }), { ok: false });
  assert.equal(backend.rows.length, 0);
});

test('Apps Script rejects invalid No RSVP guest count', () => {
  const backend = makeMock();
  assert.deepEqual(backend.send({ ...sample, Attending: 'No', Guests: 2 }), { ok: false });
  assert.equal(backend.rows.length, 0);
});

test('Apps Script keeps potentially malicious text as text', () => {
  const backend = makeMock();
  assert.deepEqual(backend.send({ ...sample, Name: '=HYPERLINK("http://example.com")' }), { ok: true });
  assert.ok(backend.rows[0][1].startsWith("'="));
});

test('Apps Script refuses incorrect sheet headers and releases lock', () => {
  const backend = makeMock({ headers: ['Date', 'Name', 'Phone', 'Attending', 'Guests', 'Message'] });
  assert.deepEqual(backend.send(sample), { ok: false });
  assert.equal(backend.rows.length, 0);
  assert.equal(backend.released, true);
});

test('Apps Script refuses writes when lock is unavailable', () => {
  const backend = makeMock({ lockAvailable: false });
  assert.deepEqual(backend.send(sample), { ok: false });
  assert.equal(backend.rows.length, 0);
});

test('Apps Script refuses malformed JSON rather than confirming a save', () => {
  const backend = makeMock();
  assert.equal(backend.send({ ...sample, Timestamp: 'not a date' }).ok, false);
  assert.equal(backend.rows.length, 0);
});
