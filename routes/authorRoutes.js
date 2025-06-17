const express = require('express');
const router = express.Router();
const { getAllAuthors, updateAuthor } = require('../controllers/authorControllers');

router.get('/', getAllAuthors);
router.put('/:id', updateAuthor);

module.exports = router;
