const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { AuthMiddleware, isAdmin } = require('../middlewares/auth');

// Create a product if isAdmin
router.post('/', AuthMiddleware, isAdmin, productController.createProduct);

// Get all products
router.get('/', productController.getProducts);

// Get a product
router.get('/:id', productController.getProduct);

// Update a product if isAdmin
router.put('/:id', AuthMiddleware, isAdmin, productController.updateProduct);

// Delete a product if isAdmin
router.delete('/:id', AuthMiddleware, isAdmin, productController.deleteProduct);

module.exports = router;