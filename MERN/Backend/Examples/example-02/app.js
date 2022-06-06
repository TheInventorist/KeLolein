const http = require("http");
const server = http.createServer((request, response) => {
    console.log("incomming request");
    console.log(request.method, request.url);
    if(request.method == "POST"){
        let body = '';
        request.on('end', () => {
            const username = body.split('=')[1];
            response.end('<h1>' + username + '</h1>');
        });
        request.on('data', (chunk) => {
            body += chunk;
        });
    }
    else{
        response.setHeader("Content-type", "text/html");
        response.end('<form method="POST"><input type="text" name="username"><button type="submit">create user</button></input></form>')
    }
});
server.listen(5000)

