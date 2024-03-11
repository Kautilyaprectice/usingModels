const Product = require('../models/products');

const path = require('path');

exports.getShop = (req, res, next) => {
    Product.fetchAll(products => {
        res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    });
}