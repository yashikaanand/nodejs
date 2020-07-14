const express = require('express');
const app = express()
const morgan= require('morgan')

const postmethod = require("./routes/post");
//const string1 = postmethod.sum(1,2);
app.use(morgan("dev"))
//app.use("/",postmethod.getpost);
app.get("/sum",(req,res)=>{
    res.send(postmethod.sum(1,2).toString());
})
app.get("/sub",(req,res)=>{
    res.send(postmethod.subtract(3,2).toString());
})
app.get("/print",(req,res)=>{
    res.send(postmethod.print(3,2).toString());
})
app.listen(3000,()=> console.log("server listen at 3000"));