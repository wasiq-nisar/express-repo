const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/', (req, res) => {
    //res.json([{ name: 'Wasiq' }, { name: 'Shahzil' }]);
    //res.json(products);
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((prod) => {
        const { id, name, image } = prod;
        return { id, name, image }
    })
    res.json(newProducts);
})

app.get('/api/products/:prodId', (req, res) => {
    console.log(req.params);
    const { prodId } = req.params;
    const singleProd = products.find((prod) => prod.id === Number(prodId));
    if (!singleProd) {
        return res.status(404).send('Product Does Not Exist!!');
    }
    return res.json(singleProd);
})

app.get('/api/products/:prodId/reviews/:reviewNo', (req, res) => {
    console.log(req.params);
    res.send('<h3>Hello World</h3>')
})

app.listen(5000, () => {
    console.log('Server is Listening to Port 5000...');
})