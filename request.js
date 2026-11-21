import http from 'k6/http';
import { check, sleep } from 'k6';

export default function request() {
  const path = __ENV.SLOW === '1' ? '/slow' : '/';
  const response = http.get('http://127.0.0.1:3002' + path);
  check(response, { 'status 200': (r) => r.status === 200 });
  sleep(1);
}
