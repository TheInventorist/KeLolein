const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post("/user", (req, res, next) => {
    res.send('<h1> user: ' + req.body.username + '<h1>');
})

app.get("/", (request, response, next) => {
    response.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">create user</button></input></form>')
});

app.listen(5000);