const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
      nombre: 'Sofia',
      edad: 21,
      ulr: req.url
    };

    res.write(JSON.stringify(salida));

    res.end();
  })
  .listen(8080);
