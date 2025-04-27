const express = require("express")
const app = express()
// requiring dotenv and initilizing it with default configuration
require('dotenv').config()
// database connection
require("./database/connection")
// routes here
const bookRoute = require("./routes/bookRoute")
//serve files in uploads-Folder publicly or
// nodejs lai file access garna dey vaneko hae yo code lay
app.use(express.static("./src/uploads/"))

// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.urlencoded({extended : true})) // ssr 
app.use(express.json()) // external like react, vuejs 


app.use("/api",bookRoute)







app.listen(process.env.PORT,function(){
    console.log("server project has started at port 3000")
})