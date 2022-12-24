const express = require('express');
const app = express();


const serverStart = ()=>{
    app.listen(4000 , ()=>{
        console.log("server is working fine")
    })
}


app.get("/",(req , res)=>{
    res.status(200).json({"message" : "working fine"});
})

serverStart();