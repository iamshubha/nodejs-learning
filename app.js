const http = require('http')
const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log("shubha")
    res.send("hi its for github")
    next()
})
app.get('/git',(req,res)=>{
    console.log("shubha")
    res.send("shubha")
})

app.use((req,res)=>{
    console.log("banerje")
    res.send("banerjee")
})
app.listen(8080)