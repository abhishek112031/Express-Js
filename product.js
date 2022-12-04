// const { dirname } = require('path');
const path=require('path');


//for add-product:

exports.getAddProducts=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'));
}


exports.postAddProducts=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/add-product/sucess');
}

exports.addProductResponse=(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,"..",'views','addProduct-success.html'));
    
}

//for contacts:
exports.contactAdmin=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
}

exports.onPostContact=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/admin/contact-us/successful');
    
}

exports.contactResponse=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','contact-success.html'));
}

