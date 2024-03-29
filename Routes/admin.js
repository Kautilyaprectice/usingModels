const path = require('path');

const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET request.
router.get('/add-product',adminController.getAdmin);

// /admin/add-product => POST request.
router.post('/add-product',adminController.postAdmin);

module.exports = router;