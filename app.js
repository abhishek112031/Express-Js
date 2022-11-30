// const http=require('http'); dont need while using express frameworks.
const express=require('express');
const bodyParser=require('body-parser');

//express application storing in a constant :
const app=express();


//allows us to use new middleware functions:
//it acceps array of requestHandellers:
//the anonymous /call back function inside it will be executed for every incomming requests.
//next is a function that we pass inside cb function:
app.use(bodyParser.urlencoded({extended:false}))

app.use('/app-product',(req,res,next)=>{
   
    res.send( '<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');//send allows us to attach a body,which is a type of any..
});


//app.get() :for incomming get request, app.post() :for in comming post request
app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    
    res.send( '<h1>hi from express</h1>');//send allows us to attach a body,which is a type of any..
});

// const server=http.createServer(app);
// server.listen(3000);
// other method to listen port/creating server:

app.listen(3000);

