const seedBlogPosts = require('./blogSeeder');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const dbUrl = 'mongodb://localhost:27017/vulnerablemean';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

seedBlogPosts(); // Call the seeder function here
