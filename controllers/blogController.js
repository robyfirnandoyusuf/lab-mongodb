const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
    const blogs = await Blog.find();
    const featured = await Blog.findOne({
        featured: 1
    });
    const latest = await Blog.find().limit(3).sort({$natural:-1})
    console.log(latest)
    res.render('blogs', { user: req.session.user, blogs:blogs, featured:featured, latest:latest, page_name: 'blog' });
});

router.get('/post/:id', async (req, res) => {
    const blog = await Blog.findOne({
        _id: req.params.id
    });
    console.log(blog)
    // Retrieve blog post by ID and render detailed view
    res.render('blog_detail', { user: req.session.user, blog: blog, page_name: 'blog'});
});

router.get('/post-by/:username', async (req, res) => {
    const blogs = await Blog.find({
        createdBy: req.params.username
    });
    const featured = await Blog.findOne({
        featured: 1
    });
    const latest = await Blog.find().limit(3).sort({$natural:-1})
    console.log(req.params.username)
    res.render('blogs', { user: req.session.user, blogs: blogs, featured: featured, latest: latest, page_name: 'blog' });
    // // Retrieve blog post by ID and render detailed view
    // res.render('blog_detail', { user: req.session.user, blog: blog, page_name: 'blog'});
});

module.exports = router;
