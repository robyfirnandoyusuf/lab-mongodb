const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    // role: {
    //     type: String,
    //     enum: ['user', 'admin'],
    //     default: 'user',
    // },
}, { 
    // timestamps: false,
	collection: 'user'
});

module.exports = mongoose.model('User', userSchema);