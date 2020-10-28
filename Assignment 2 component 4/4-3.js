'use strict';

let http = require('http');
let fs = require('fs').promises;

let url = require("url");

let server = http.createServer((request, response) => {

	let path = url.parse(request.url).pathname;

	switch (path) {

		case '/3-4':
		case '/3-4.html':
		case '/':

			fs.readFile(__dirname + "/3-4.html").then(data => {

				response.setHeader("Content-Type", "text/html");
				response.writeHead(200);
				response.end(data);

			}).catch(function () {

				response.setHeader("Content-Type", "text/html");
				response.writeHead(404);
				response.end("<h1>Error 404:  Page not found</h1>");

			});

			break;

		case '/serveThis':
		case '/serveThis.html':
		case '/pug':
		case '/pug.html':

			fs.readFile(__dirname + "/html/serveThis.html").then(data => {

				response.setHeader("Content-Type", "text/html");
				response.writeHead(200);
				response.end(data);

			}).catch(function () {

				response.setHeader("Content-Type", "text/html");
				response.writeHead(404);
				response.end("<h1>Error 404:  Page not found</h1>");

			});

			break;

		case '/wiki.html':
		case '/wiki':
			fs.readFile(__dirname + "/wiki.html").then(data => {

				response.setHeader("Content-Type", "text/html");
				response.writeHead(200);
				response.end(data);

			}).catch(() => {

				response.setHeader("Content-Type", "text/html");
				response.writeHead(404);
				response.end("<h1>Error 404:  Page not found</h1>");

			});

			break;

		default:

			response.setHeader("Content-Type", "text/html");
			response.writeHead(404);
			response.end("<h1>Error 404:  Page not found</h1>");

			break;

	}

});

server.listen(3000, '127.0.0.1');

