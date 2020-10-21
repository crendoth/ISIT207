'use strict';

let http = require('http');
let fs = require('fs').promises;

let server = http.createServer((request, response) => {

    fs.readFile(__dirname + "/3-4.html").then(data => {

        response.setHeader("Content-Type", "text/html");
        response.writeHead(200);
        response.end(data);

    }).catch(() => {

        response.setHeader("Content-Type", "text/html");
        response.writeHead(404);
        response.end("<h1>Error 404 - page not found</h1>");

    });

});

server.listen(3000, '127.0.0.1');

