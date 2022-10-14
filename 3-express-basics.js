const express = require('express');
const app = express();

// OR Instead of Above 2 Statements we can use:
// const app = require('express')();

app.get('/', (req, res) => {
    res.end('Home Page');
})

app.get('/about', (req, res) => {
    res.end('About Page');
})

app.all('*', (req, res) => {
    //res.end('<h2>Resource Not Found...</h2>');  //But this will send a status of 200
    res.status(404).send('<h2>Resource Not Found...</h2>')
})


app.listen(5000, () => {
    console.log('Listening to Port# 5000...');
})