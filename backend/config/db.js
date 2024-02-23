const mongoose = require('mongoose');

module.exports = async function() {
     try {
         const conn = await mongoose.connect(process.env.MONGO_URI);
         console.log(`Connection to ${conn.connection.name}.db Established Successfully.`)
     } catch (error) {
         console.log(error)
         process.exit(1);
     }   
}