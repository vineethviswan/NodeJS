
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const productController = require('../controller/product.controller');

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updatedProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;