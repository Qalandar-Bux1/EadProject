const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Create course
router.post('/', courseController.createCourse);

// Get all courses
router.get('/', courseController.getCourses);

// Get course by ID
router.get('/:id', courseController.getCourseById);

// Update course by ID
router.put('/:id', courseController.updateCourse);

// Delete course by ID
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
