const http = require('http');
const server = http.createServer((req, res) => {

    if(req.url === '/') {

        res.end('Welcome to homepage');
    }

    if(req.url === '/about') {

        res.end('Welcome to about page');
    }

    res.end('' +
        '<h1> Not Found</h1>' +
        '<p> This page is not available </p>' +
        '')
})

server.listen(8080);