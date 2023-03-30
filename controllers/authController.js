const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


// Create MongoDB store for sessions
const store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/vulnerablemean',
    collection: 'sessions'
});

router.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('login', { title: 'Login', page_name: 'login' });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('request', req.body)
    query = { username: req.body.user, password: req.body.pass }
    const user = await User.findOne(query);
    console.log(query, user)
    /* const user = await User.findOne({ username });
    console.log(user, username)
    if (!user) {
        return res.render('login', { title: 'Login', error: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return res.render('login', { title: 'Login', error: 'Invalid email or password' });
    } */

    // req.session.user = user;
    if (!user) {
        return res.render('login', { title: 'Login', error: 'Invalid email or password', page_name: 'login' });
    }
    req.session.user = { id: user._id };
    res.redirect('/dashboard');
});

router.get('/logout', (req, res) => {
    // Clear the session
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            // Redirect the user to the login page
            res.redirect('/auth/login');
        }
    });
});

module.exports = router;
