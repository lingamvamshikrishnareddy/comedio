const express = require('express');
const { uploadMusic, getMusicLibrary, deleteMusic } = require('../controllers/musicController');
const router = express.Router();

// Music management routes
router.post('/upload', uploadMusic);
router.get('/', getMusicLibrary);
router.delete('/:id', deleteMusic);

module.exports = router;
