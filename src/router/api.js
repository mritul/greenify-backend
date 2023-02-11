const router = require("express").Router()

// To save the footprint details
router.post("/websites",(req,res)=>{
    res.json({message:"Saved the website"})
})

// Get all the webistes under that user (sorted)
router.get("/websites/:userID",(req,res)=>{
    res.json({status:200,message:"Here are your websites"})
})


module.exports = router