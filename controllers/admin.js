const Product = require('../models/products');

const path = require('path');

exports.getAdmin = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

exports.postAdmin = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    console.log(req.body);
    res.redirect('/');
}