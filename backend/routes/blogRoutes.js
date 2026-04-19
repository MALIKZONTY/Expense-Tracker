const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Public routes for reading blogs
router.get('/', blogController.getPosts);
router.get('/:slug', blogController.getPostBySlug);

module.exports = router;
