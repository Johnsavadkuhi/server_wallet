const mongoose = require('mongoose'); 
const CONNECTION_STRING = require('./constants').CONNECTION_STRING;
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING , {useNewUrlParser: true , useUnifiedTopology: true })

const db  = mongoose.connection 

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected ");
});
