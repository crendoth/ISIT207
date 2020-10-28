'use strict';

let http = require('http');
let fs = require('fs').promises;
let formidable = require("formidable");

let server = http.createServer((request, response) => {

    alert(request.url);

});

server.listen(3000, '127.0.0.1');

