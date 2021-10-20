const express = require('express');
const { handleGreeting, otherValue } = require('./greeting');
const handleCatFactsRequest = require('./catFacts');
const handleBreakingBadQuotesRequest = require('./breakingBadQuotes');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("Test hello!!!")
});

app.get("/hello/:name?", (req, res) => {
    handleGreeting(req, res);
    console.log(otherValue);
});

app.get('/cat/facts', handleCatFactsRequest);

app.get('/breakingbad/quotes', handleBreakingBadQuotesRequest);

app.listen(port, () => {
    console.log("Server started on", port);
});