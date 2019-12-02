const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController.js'); 
router.post('/product',productController.create)
router.get('/product',productController.index)
router.put('/product/:_id',productController.update)
router.delete('/product/:_id',productController.delete)

const userController = require('./controllers/userController.js'); 
router.post('/User',userController.create)
router.get('/User',userController.index)
router.put('/User/:_id',userController.update)
router.delete('/User/:_id',userController.delete)

module.exports = router;