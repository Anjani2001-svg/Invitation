import test from 'node:test';
import assert from 'node:assert/strict';
import { getUsWeddingTime, US_TIME_ZONES } from '../lib/us-time.ts';
import { sameDayStartIso, googleCalendarUrl, weddingIcs } from '../lib/calendar-core.ts';

const mass = '2027-05-22T16:00:00+05:30';
const reception = sameDayStartIso(mass, '7:00 PM');

const expected = [
  ['America/New_York', '6:30 AM EDT', '9:30 AM EDT'],
  ['America/Chicago', '5:30 AM CDT', '8:30 AM CDT'],
  ['America/Denver', '4:30 AM MDT', '7:30 AM MDT'],
  ['America/Los_Angeles', '3:30 AM PDT', '6:30 AM PDT'],
];

test('US time-zone selector offers all four continental zones', () => {
  assert.deepEqual(US_TIME_ZONES.map(({id}) => id), expected.map(([id]) => id));
});

test('correct USA ceremony and reception times on wedding date with DST', () => {
  for (const [id, ceremonyTime, receptionTime] of expected) {
    assert.equal(getUsWeddingTime(mass, id).time, ceremonyTime);
    assert.equal(getUsWeddingTime(reception, id).time, receptionTime);
    assert.equal(getUsWeddingTime(mass, id).date, 'Sat, May 22');
  }
});

test('calendar links and downloadable ICS retain the real Sri Lanka event instant', () => {
  const event = {
    id: 'ceremony',
    title: 'Nuptial Mass - Anjani & Vihan',
    startIso: mass,
    endIso: '2027-05-22T12:30:00.000Z',
    location: "St. Paul's Church, Waragoda, Kelaniya, Sri Lanka",
    description: 'Anjani and Vihan wedding',
    timezone: 'Asia/Colombo',
  };
  const link = new URL(googleCalendarUrl(event));
  assert.equal(link.searchParams.get('dates'), '20270522T103000Z/20270522T123000Z');
  assert.equal(link.searchParams.get('location'), event.location);
  const ics = weddingIcs([event]);
  assert.match(ics, /DTSTART:20270522T103000Z/);
  assert.ok(ics.includes(String.raw`LOCATION:St. Paul's Church\, Waragoda\, Kelaniya\, Sri Lanka`));
});
