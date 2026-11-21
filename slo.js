export { default } from './request.js';

const p95 = Number(__ENV.P95_MS);
if (!Number.isFinite(p95) || p95 <= 0) {
  throw new Error('Set P95_MS from the measured baseline.');
}

export const options = {
  vus: 30,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<' + p95],
    http_req_failed: ['rate<0.01'],
  },
};
