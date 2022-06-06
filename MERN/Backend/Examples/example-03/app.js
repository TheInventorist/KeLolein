const express = require("express");

const app = express();

app.use((request, response, next) => {
    console.log("Midleware");
    next();
});

app.use((request, response, next) => {
    let body = '';
    request.on('end', () => {
        const username = body.split('=')[1];
        if(username){
            request.body = { name: username };
        }
        next();
    });
    request.on('data', (chunk) => {
        body += chunk;
    });
});

app.use((request, response, next) => {
    if(request.body){
        return response.send('<h1>' + request.body.name + '<h1>');
    }
    response.send('<form method="POST"><input type="text" name="username"><button type="submit">create user</button></input></form>')
});

app.listen(5000);