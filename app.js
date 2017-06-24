//import  packages
const express = require('express');
const user = require('./routers/users');
//initialize app and set port
const app = express();
const port = process.env.PORT||8080;



app.use('/user',user);

app.listen(port,function(){
  console.log('Server is running at: ' + port)
});
