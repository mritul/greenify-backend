const router = require("express").Router()

// Send JWT
router.get("/",(req,res)=>{
    res.json({status:200,message:"Here's your jwt"})
})

// Register
router.post("/register",(req,res)=>{
    res.json({status:200,message:"Registering in..."})
})

// Login
router.post("/login",(req,res)=>{
    res.json({status:200,message:"Logging in..."})
})

module.exports = router