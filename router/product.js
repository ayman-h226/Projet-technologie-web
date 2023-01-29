const express = require('express');
const router = express.Router();
const ProdControl = require('../controllers/product');
const product = require('../models/product');
const ObjectId = require('mongoose').Types.ObjectId;


router.post('/', ProdControl.createProduct);
router.get('/:id', ProdControl.getOneProduct);
router.get('/', ProdControl.getAllProduct);
router.put('/:id', ProdControl.updateProduct);
router.delete('/:id', ProdControl.deleteOneProduct);


module.exports = router;