const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome to the home page");
    }
    else if(req.url === '/about'){
        res.end("This is our history");
    }
    else{
        res.end(`<h1>Something's wrong</h1>`);  
    }
})

server.listen(5000);