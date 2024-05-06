const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect(process.env.DB_LOCAL_URI)
        .then((x) => { console.log(`DB connected on ${x.connection.host}`); })
}

module.exports = connectDatabase;   