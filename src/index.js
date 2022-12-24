const express = require('express');

const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')

// testing repo
const CityRepository = require("./repository/cityRepo")

const SetupAndStartServer = async()=>{

    //create express object
    const app = express();


    // middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.listen(PORT , ()=>{
    console.log(`server is running fine on ${PORT}`)
      
    // demo for using repositories
    const repo = new  CityRepository();
      repo.createCity({name:"New Delhi"});
    })
}




SetupAndStartServer();