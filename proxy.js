const http = require('http')
http.createServer((req, res) => {
  req.pipe(http.request({
    host: null,
    port: null,
    socketPath: 'sock.sock',
    path: req.url,
    method: req.method,
    headers: req.headers
  }, (_res) => {
    res.writeHead(_res.statusCode, _res.headers)
    _res.pipe(res, { end: true })
  }), { end: true })
}).listen(8080)
