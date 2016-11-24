var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	name: String,
    age: Number,
    nationality: String,
    birthdate: Date
});

mongoose.model('User', userSchema);