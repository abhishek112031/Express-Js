const express=require('express');
const shopRoute=express.Router();


shopRoute.get('/',(req,res,next)=>{
    
    res.send( '<h1>hi from express</h1>');//send allows us to attach a body,which is a type of any..
});

module.exports=shopRoute;