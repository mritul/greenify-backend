const bcrypt = require("bcryptjs")
const User = require("../model/User")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()


const router = require("express").Router()

// Send JWT
router.get("/",(req,res)=>{
    res.json({status:200,message:"Here's your jwt"})
})

// Register
router.post("/register",async (req,res)=>{
    try{
        const {username,password} = req.body
        console.log(username,password);
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt)
        const user = new User({
            username,
            password:hashedPass
        })
        const saveUser = await user.save()
        console.log(saveUser);
        res.json({message:"Successfully registered"})
    }
    catch(err){
        console.log(err);
        res.json({message:"Error while trying to register"})
    }
})

// Login
router.post("/login",async(req,res)=>{
    try{
        const {username,password} = req.body
        const user = await User.findOne({username})
        const passMatched = await bcrypt.compare(password,user.password)
        if(!passMatched){
            res.json({status:401,message:"Password did not match",auth:false});
        }
        else{
            const accessToken = jwt.sign({username:username},process.env.JWT_SECRET)
            res.json({status:200,message:"Successfully authorized",auth:true,token:accessToken})
        }
    }
    catch(err){
        res.json({message:"Error while trying to login"})
    }
})

module.exports = router