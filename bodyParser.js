const express=require("express");
const app=express();

//parse incoming json requests
app.use(express.json());
//parse URL -encoded data (e.g.,from HTML forms)
app.use(express.urlencoded({extended:true}));

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send('User data received');
});

app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
});