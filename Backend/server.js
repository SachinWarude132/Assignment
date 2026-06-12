require("dotenv").config()
const app =  require("./src/app")
const connectToDB = require("./src/config/Database")
const cors = require("cors");

connectToDB()
app.listen(3000,()=>{
    console.log("Server is running");
    
})