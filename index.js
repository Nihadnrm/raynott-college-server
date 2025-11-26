const dotenv = require('dotenv').config()
const express=require('express')
const cors=require('cors')
const connection=require("./connection/connection")
const router=require("./routes/route")


const server=express()
server.use(cors())
server.use(express.json())
server.use(router)

const port=4000 || process.env.PORT
server.listen(port,()=>{
    console.log("server running at",port);
    
})