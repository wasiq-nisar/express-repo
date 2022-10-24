const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./navbar-app/public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found...')
})

app.listen(5000, () => {
    console.log('Listening on Port 5000...')
})

