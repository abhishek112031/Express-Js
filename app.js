// const http=require('http'); dont need while using express frameworks.
const express=require('express');

//express application storing in a constant :
const app=express();


//allows us to use new middleware functions:
//it acceps array of requestHandellers:
//the anonymous /call back function inside it will be executed for every incomming requests.
//next is a function that we pass inside cb function:
app.use((req,res,next)=>{
    console.log("in the middleware!");
    next();//to allow request to continue to next middleware inline:
           //we should call next() if we dont want to send response otherwise req wiill die.. 
});

app.use((req,res,next)=>{
    console.log("in the next middleware!");
    res.send( '<h1>hi from express</h1>');//send allows us to attach a body,which is a type of any..
});

// const server=http.createServer(app);
// server.listen(3000);
// other method to listen port/creating server:

app.listen(3000);

