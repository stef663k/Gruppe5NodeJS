const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const port = 3000;


const server = http.createServer((req, res) => {

    switch(req.url) {
        case "/":
            res.writeHead(200, {'Content-Type': 'text/html'});
            let template = fs.readFileSync('design1/index.html', "utf-8")
            const data = JSON.parse(fs.readFileSync('posts.json', 'utf8'));
            const html = ejs.render(template, { title: 'John', articles: data });
            res.write(html);
            res.end();
            break;
        case "/styles/styles.css":
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(fs.readFileSync('design1/styles/styles.css', "utf-8"));
            res.end();
            break;
        case "/scripts/main.js":
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(fs.readFileSync('design1/scripts/main.js', "utf-8"));
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