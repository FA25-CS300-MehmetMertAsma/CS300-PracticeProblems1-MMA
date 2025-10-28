/**
 * Post Routes
 * 
 * Define all the API endpoints for post related activities
 * 
 * Each route will be map on HTTP method and URL
 * pattern/sLug to a controller function
 * 
 * Router Pattern:
 * Routes will be mounted on '/api/posts' in server.js
 * So '/' here will become '/api/posts/' in full URL
 * 
 * EX: '/:id' here becomes '/api/posts/:id' in full URL
 * 
 * 
 */
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get /api/posts
// get all blog posts
// controller getAllPosts
router.get('/', postController.getAllPosts);

// POST/api/posts/:id
// Get a single post by the ID number
// URL Param: id (number) - post ID
// Contoller: getPostByID
router.get('/:id', postController.getPostById);

// POST /api/posts
// Create a new blog post
// Req Body: {yiyle, content, author}
// Controller: createPost
router.post('/', postController.createPost);

// Post /api/posts
// Update an entire post (replacing all fields)
// URL Param: id (number) - Post Id
// req Body: {title, content, author, published}
// Controller: updatePost
router.put('/:id', postController.updatePost);

// PATCH /api/posts/:id/publish
// Toggles the published status of a post
// URL param: id (number) - Post Id
// No Req Body
// Controller: togglePublish
router.patch('/:id/publish', postController.togglePublish);

// Delete /api/posts/:id



router.delete('/:id', postController.deletePost);

// Export router to be usable in other parts of application
module.export = router;

// 