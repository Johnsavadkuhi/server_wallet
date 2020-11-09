
const   CONNECTION_STRING = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.vhani.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

module.exports= CONNECTION_STRING 