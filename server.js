//import express
const express=require("express")
const connectDB=require("./config/connectDB")

const app=express()
app.use(express.json())
connectDB()

app.use("/api/auth",require("./routes/auth"))
const port=5000
 app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
 })
