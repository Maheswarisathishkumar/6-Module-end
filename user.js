const express = require('express');
const router= express.Router();

const userController = require("../src/controller/productController");

router.get('/list', productController.getAllProducts);
router.get('/list/:id ', productController.getProductsById);
router.patch('/list:id', productController.updateProducts);
router.delete('/list', productController.deleteProducts);
router.get('/list:createProduct', productController.createProducts);



module.exports=router;