const mongoose = require('mongoose');

const connect = (dbUrl) => {
    console.log("DBURL=======>", dbUrl)
    mongoose.connect(dbUrl, {
        logger: process.env.NODE_ENV === "development",
        serverSelectionTimeoutMS: 5000,
        dbName: "zomfi"
    });
    mongoose.connection.on("connected", () => {
        console.log(`Database was connected successfully! ===>: ${dbUrl}`);

    });
}

module.exports = {
    connect
}