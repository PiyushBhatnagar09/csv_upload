// connecting to mongoose to get acccess to mongodb database
const mongoose= require('mongoose');
mongoose.connect(`mongodb+srv://pbpiyush34:piyushbhat@cluster0.6zttkel.mongodb.net/?retryWrites=true&w=majority`);

// making connection
const db= mongoose.connection;

//checking error in connection
db.on('error', console.error.bind(console, 'Error connecting to mongoDb'));

//if connection done then show success message
db.once('open', function() {
    console.log('Successfully connected to the database');
});

module.exports= db;