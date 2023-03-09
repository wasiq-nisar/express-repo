const express = require('express');
const logger = require('./logger');
const app = express();

app.use(logger);
//app.use('/api', logger);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api', (req, res) => {
    res.send('API');
})

app.get('/api/products', (req, res) => {
    res.send('Products');
})


app.listen(5000, () => {
    console.log("Server is Listening to Port 5000...")
})