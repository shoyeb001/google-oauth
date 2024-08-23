const express = require('express');
const cors = require("cors")
require('dotenv').config();
require("./modules/db")
const app = express();
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}));


const PORT = process.env.PORT || 8000;
const authRouter = require("./routes/authRouter")
app.get("/", (req, res)=>{
    res.send("Hello from backend");
})
app.use("/api/v1/auth", authRouter);
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})