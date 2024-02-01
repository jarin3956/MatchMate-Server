const express = require('express');
const port = require('./config/serverConnect');
const connectDB = require('./config/dbConnection');
const user_route = require('./Routes/userRoute');
const admin_route = require('./Routes/adminRoute');
const cors = require('cors')
const app = express();

connectDB();
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use('/', user_route);
app.use('/admin', admin_route);

app.listen(port, () => {
    console.log(`server running @ port ${port}`);
})