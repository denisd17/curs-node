const fetch = require('node-fetch');

const breakingBadQuotes = async(req, res) => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const body = await response.json();
    const charQuote = body.map(({ quote, author}) => ({
        quote,
        author,
    }));

    res.send(charQuote);
}

module.exports = breakingBadQuotes;