const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('about', {title: 'About', page_name: 'about'});
});

module.exports = router;