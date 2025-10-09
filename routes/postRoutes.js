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