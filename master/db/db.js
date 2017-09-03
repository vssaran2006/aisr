var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb');

module.exports = mongoose;


/*** Alternate way to connection  ****/
// var db = mongoose.createConnection('mongodb://localhost:27017/demoDb');
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//     console.log('db connection open');
// });
// module.exports = db;
/**** --- ****/