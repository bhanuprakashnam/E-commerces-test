import express from "express";
const app=express();
app.listen(8967,()=>{
    console.log("server is runnind at port 8967");
});
app.get("/",(req,res)=>{
    res.send("welcome to e-commerce");
})
