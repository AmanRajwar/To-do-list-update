const express = require('express');
const app =express();
const port= 8000;

const db= require('./config/mongoose');


//set up the view engine which is ejs
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use(express.json());
app.use('/',require('./routes/home'));
app.use(express.static('assets'));

app.listen(port,function(error) {
  if(error) {
    console.log("error in listening to the server");
  }
  console.log("server is up");
})

