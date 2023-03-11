const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user){
        req.user = {name: 'Wasiq', id: 3}
        next();
    }
    else{
        res.status(401).send('Unauthorized');
        next()  
    }

}

module.exports = authorize;