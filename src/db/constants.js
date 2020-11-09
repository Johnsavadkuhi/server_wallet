require('dotenv').config()
const   CONNECTION_STRING = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.vhani.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
console.log(process.env.USER_NAME , CONNECTION_STRING); 
module.exports= CONNECTION_STRING 