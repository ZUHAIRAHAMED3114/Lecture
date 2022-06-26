const mongoose = require('mongoose');
const connectDB = () => {
    mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(connection => {
            console.log(`MongoDb Database with host:${connection.connection.host}`)
        });
}

module.exports = connectDB;