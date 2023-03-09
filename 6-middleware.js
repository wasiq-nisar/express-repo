const express = require('express');
const app = express();

const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Hello World');
})

app.listen(5000, () => {
    console.log("Server is Listening to Port 5000...")
})