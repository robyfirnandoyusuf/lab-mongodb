const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        lowercase: true,
    },
    featured: {
        type: Number,
        integer: true
    },
    createdBy: {
        type: String,
        lowercase: true,
    },
    createdAt: {
        type : Date, 
        default: Date.now,
        lowercase: true,
    },
}, { 
    // timestamps: false,
	collection: 'blog'
});

module.exports = mongoose.model('Blog', blogSchema);