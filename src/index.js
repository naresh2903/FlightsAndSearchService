const express = require('express');
const app = express();

const {PORT} = require('./config/serverConfig')
const SetupAndStartServer = ()=>{
    app.listen(PORT , ()=>{
        console.log(`server is running fine on ${PORT}`)
    })
}


app.get("/",(req , res)=>{
   
    res.status(200).json({"message" : `working fine on ${PORT}`});
})

SetupAndStartServer();