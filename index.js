const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer((req, res) => {
/* fs.readFile('design1/index.html', {encoding: "utf-8"},  function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
}); */

    /* if(req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync('design1/index.html', {encoding: "utf-8"}));
        res.end();
    } 
    if(req.url === "/styles/styles.css") {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(fs.readFileSync('design1/styles/styles.css', {encoding: "utf-8"}));
        res.end();
    }
    
    else{
        res.end("Invalid Request")
    } */

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
      res.write('error'); //read the file & write the data content
      res.end();
      break;


    }


});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});