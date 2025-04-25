require('dotenv').config()

exports.envConfig = {
    port: process.env.PORT,
    connectionString: process.env.CONNECTION_STRING

}