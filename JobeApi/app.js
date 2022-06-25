const express = require('express');
const app = express();

const dotenv = require('dotenv');
//setting up config.env file variables
const connectDatabase = require('./config/database')
dotenv.config({
    path: './config/config.env'
});
//Connecting to Database
connectDatabase();
//importing all routes
const jobs = require('./routes/jobs');
app.use('/api/v1', jobs);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);

})