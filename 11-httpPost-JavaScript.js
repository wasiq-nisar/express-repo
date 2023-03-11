const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('./methods-public'));
//Parse Form Data
app.use(express.urlencoded({extended: false}));
//Parse Json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people }) 
})

app.post('/api/people', (req, res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(401).json({success: false, msg: 'Please Provide Name Value'});
    }
    else{
        res.status(201).json({success: true, person: name});
    }
})

app.listen(5000, () => {
    console.log('Listening to Port# 5000...');
})