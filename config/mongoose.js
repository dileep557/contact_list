// // // require the library
const mongoose = require('mongoose');

// // // connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/contacts_list_db');


 //acquire the connection if it is successfully or not
const db = mongoose.connection;

// // // if an error occurs
db.on('error', console.error.bind(console, 'Error connecting to database:'));

// //  if the db is successfully connected
 db.once('open', function () {
   console.log('Successfully connected to the database');
 });

// const mongoose = require("mongoose");
// // mongoose.set('strictQuery', false);
// const mongoDB = "mongodb://localh/contact_list_db"; 
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(mongoDB);
//   console.log('connected');
// }

