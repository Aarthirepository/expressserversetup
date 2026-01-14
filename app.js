


const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log("Output from middleware 1")
    next()
})
app.use((req,res,next)=>{
    console.log("Output from middleware 2")
    res.send(
      "Server is up and running on port 3000! Ready to handle requests."
    );
})


app.listen(3001, ()=>{
    console.log("Sever is running on port 3001")
})    