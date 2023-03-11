const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false}));

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people }) 
})

app.post('/login',(req, res)=>{
    console.log(req.url);
    console.log(req.body);          //Undefined if we don't use urlencoded middleware
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    else{
        res.status(401).send(`Please Enter Credntials`);
    }    
})

app.listen(5000, () => {
    console.log('Listening to Port# 5000...');
})