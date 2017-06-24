//import  packages
const express = require('express');
const mongoose = require('mongoose');
const user = require('./routers/users');
/*
 * Connect to the database
 * Connected and error show differnet messages
 */
const config = require('./config/database');
mongoose.connect(config.database);
mongoose.connection.on('connected',function(){
  console.log('Connected to database: '+config.database);
});
mongoose.connection.on('error',function(err){
  console.log('Database error'+err);
});
//initialize app and set port
const app = express();
const port = process.env.PORT||8080;

app.use('/',user);

app.listen(port,function(){
  console.log('Server is running at: ' + port)
});
