const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true // Optional, but no longer needed from MongoDB Driver version 4.0.0+
    })
    .then(() => {
        console.log("Connection with database is successful");
    })
    .catch((error) => {
        console.error("Issue in database connection:");
        console.error(error.message);
        process.exit(1); // Exit the Node.js process with an error code
    });
};

module.exports = dbConnect;
