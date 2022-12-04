const express=require('express');
const path=require('path');
const router=express.Router();
const bodyParser=require('body-parser');

const productControllers=require('../controllers/product');

//for add-product routes:
router.get('/add-product',productControllers.getAddProducts);
router.post('/add-product',productControllers.postAddProducts);
router.get('/add-product/sucess',productControllers.addProductResponse);


//for contact routes:-->
router.get('/contact-us',productControllers.contactAdmin);
router.post('/contact-us',productControllers.onPostContact);
router.get('/contact-us/successful',productControllers.contactResponse);


module.exports=router;

