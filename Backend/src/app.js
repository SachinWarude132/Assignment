const express = require("express");
const cookieparser = require("cookie-parser")
const app = express()
const Authrouter = require("../src/routes/auth.routes")
const cors = require("cors");   
const taskRoutes = require("./routes/tasks.routes");
const adminRoutes = require("./routes/admin.routes");


app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


// Routes
app.use("/api/v1/auth",Authrouter)
app.use("/api/v1/task", taskRoutes);
app.use("/api/v1/admin",adminRoutes );


module.exports= app