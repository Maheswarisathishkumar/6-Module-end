const express = require('express');
const router  = express.Router();

const cartController = require("../controller/cartController");
router.get('/list', cartController.getCartItems);

module.exports=router;