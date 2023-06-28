//require mongoose
const mongoose = require('mongoose');

// connect to database
mongoose.connect('mongodb://127.0.0.1/to_do_tasks',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

// acquire the connection to check if it is successfull or not 
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to the database'))

db.once('open',()=>{
    console.log('Successfully connected to the database')
});

