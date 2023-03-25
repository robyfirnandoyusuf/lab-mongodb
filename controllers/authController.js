const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login'});
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('request', req.body)
    query = {username: req.body.user, password: req.body.pass}
    const user = await User.findOne(query);
    console.log(query,user)
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
        return res.render('login', { title: 'Login', error: 'Invalid email or password' });
    }
    res.redirect('/dashboard');
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
