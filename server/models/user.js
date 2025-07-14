const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    birthday: {type: Date, required: true},
    adress: {type: String, required: true},
    gender: {type: String, enum: ['Homme','Femme'], required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, minlength: 10, required: true},
    imageUrl: {type: String}
});

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema);