const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.status(200).send('Home page');
});
app.get('/about',(req,res)=>{
    res.status(200).json({ message: 'About page'});
});
app.use((req,res)=>{
    res.status(404).send('Page not found');
});
app.listen(3000,(req,res)=>{
    console.log("server is running on port 3000");
});