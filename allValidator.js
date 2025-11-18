const express=require("express");
const{body,validationResult}=require("express-validator");
const app=express();

app.use(express.json());

const userRouter=express.Router();

userRouter.get("/",(req,res)=>{
    res.send("User profile");
});

userRouter.post(
    "/register",
    body('email').isEmail().normalizeEmail(),
    body("password").isLength({min:6}).withMessage("password must be atleast 6 character"),
(req,res)=>{

    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    }
    console.log(req.body.email);
    console.log(req.body.password);
    res.send("User registered");
});

app.use("/", userRouter); 

app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000");
});
