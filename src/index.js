const express = require('express');
const { response } = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("Test hello!!!")
});

app.get("/hello/:name?", (req, res) => {
    if(!req.params.name) {
        res.send("Hello world cus undefined!");
    }
    else {
        const message = "Hello " + req.params.name;
        res.send(message);
    }
    
})

app.listen(port, () => {
    console.log("Server started on", port);
});