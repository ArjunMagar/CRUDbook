const express = require("express")
const app = express()

require('dotenv').config()
require("./database/connection")
const bookRoute = require("./routes/bookRoute")

app.use(express.urlencoded({extended : true})) // ssr 
app.use(express.json()) // external like react, vuejs 


app.use("/api",bookRoute)







app.listen(process.env.PORT,function(){
    console.log("server project has started at port 3000")
})