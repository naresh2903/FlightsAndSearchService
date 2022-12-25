const express = require('express');

const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')

const apiRoutes = require('./routes/index');



const SetupAndStartServer = async()=>{

    //create express object
    const app = express();


    // middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    // routes
    app.use('/api', apiRoutes);


    app.listen(PORT , ()=>{
    console.log(`server is running fine on ${PORT}`)
      
   
   
    })
}



SetupAndStartServer();