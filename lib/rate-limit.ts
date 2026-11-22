/**
 * Simple best-effort IP limiter: 5 requests per 15 minutes per warm instance.
 * Vercel functions may scale across instances, so this is NOT a global limit.
 * See README for using Vercel WAF / durable Redis to harden public sites.
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_KEYS = 3000;

type Bucket = { count: number; resetsAt: number };
const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string, now = Date.now()): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  let existing = buckets.get(key);
  if (existing && existing.resetsAt <= now) {
    buckets.delete(key);
    existing = undefined;
  }
  if (!existing) {
    if (buckets.size >= MAX_KEYS) {
      for (const [k, bucket] of buckets) {
        if (bucket.resetsAt <= now) buckets.delete(k);
      }
      if (buckets.size >= MAX_KEYS) {
        const first = buckets.keys().next().value;
        if (first) buckets.delete(first);
      }
    }
    buckets.set(key, { count: 1, resetsAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }
  if (existing.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((existing.resetsAt - now) / 1000) };
  }
  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}
