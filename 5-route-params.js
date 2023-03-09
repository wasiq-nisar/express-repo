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

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let storedProducts = [...products];

    if (search) {
        storedProducts = storedProducts.filter((prod) => {
            return prod.name.startsWith(search);
        })
    }

    if (limit) {
        storedProducts = storedProducts.slice(0, Number(limit));
    }

    if (storedProducts.length < 1) {
        res.status(200).send('No Products Matched Your Search');
    }

    res.status(200).json(storedProducts);

    //http://localhost:5000/api/v1/query -> Will Show all results bcz of let storedProducts = [...products]; and then i return it as json
    //http://localhost:5000/api/v1/query?limit=3 -> Will Show 3 Results
    //http://localhost:5000/api/v1/query?search=a -> Will Show products whose name contain a
    //http://localhost:5000/api/v1/query?search=b -> Will Show empty array bcz no product has a name that contains b
    //http://localhost:5000/api/v1/query?search=a&limit=1 -> Will Show only 1 result
})

app.listen(5000, () => {
    console.log('Server is Listening to Port 5000...');
})