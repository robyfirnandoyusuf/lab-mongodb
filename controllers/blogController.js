const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blog', { user: req.session.user });
});

router.get('/post/:id', (req, res) => {
    // Retrieve blog post by ID and render detailed view
});

module.exports = router;
