const http = require("http");

const server = http.createServer((request, response) => {
    console.log("incomming request");
    console.log(request.method, request.url);
    response.end("Success!");
});

server.listen(5000)
