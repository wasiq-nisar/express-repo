const authorize = (req, res, next) => {
    console.log('Aothorize');
    next();
}

module.exports = authorize;