const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer((req, res) => {

    switch(req.url) {
        case "/":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(fs.readFileSync('design1/index.html', {encoding: "utf-8"}));
            res.end();
            break;
        case "/styles/styles.css":
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(fs.readFileSync('design1/styles/styles.css', {encoding: "utf-8"}));
            res.end();
            break;
        case "/scripts/main.js":
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(fs.readFileSync('design1/scripts/main.js', {encoding: "utf-8"}));
            res.end();
            break;
        default:
            res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('error');
      res.end();
      break;


    }


});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});