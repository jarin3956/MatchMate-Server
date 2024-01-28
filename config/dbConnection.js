require('dotenv').config();
const {connect} = require('mongoose')

const connectDB = () => {
    const connstr = process.env.DB_CONN_STR;
    connect(connstr).then(() => {
        console.log('dB connected');
    }).catch((err) => {
        console.log('dB connection error',err);
    })
}

module.exports = connectDB
