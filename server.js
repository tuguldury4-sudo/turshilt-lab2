const http = require('node:http');

function respond(res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"ok":true}');
}

http.createServer((req, res) => {
  if (req.url === '/slow') {
    setTimeout(() => respond(res), 100);
    return;
  }
  respond(res);
}).listen(3002, '127.0.0.1');
