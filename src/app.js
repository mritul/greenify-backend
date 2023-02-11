const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const app = express()
dotenv.config()


const port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",require("./router/index"))
app.use("/auth",require("./router/auth"))
app.use("/api",require("./router/api"))


mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`).then(()=>{
    app.listen(port,()=>{
        console.log("Server up and running at port " + port)
    })
})
