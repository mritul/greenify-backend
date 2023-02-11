const router = require("express").Router()

router.get("/",(req,res)=>{
    res.json({status:200,message:"Server running"})
})

module.exports = router