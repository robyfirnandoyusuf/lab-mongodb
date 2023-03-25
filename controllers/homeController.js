const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    const featured = await Blog.findOne({
        featured: 1
    });
    // console.log('cok', featured)
    res.render('home', { user: req.session.user, blogs:blogs, featured:featured, page_name: 'home' });
});

module.exports = router;
