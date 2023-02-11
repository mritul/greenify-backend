const router = require("express").Router()

// Get all the webistes under that user (sorted)
router.get("/websites/:userID",(req,res)=>{
    res.json({status:200,message:"Here are your websites"})
})

module.exports = router