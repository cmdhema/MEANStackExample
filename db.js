/**
 * Created by Jaewook on 2015-08-01.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/social');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("mongo db connection OK.");
});
module.exports = mongoose;