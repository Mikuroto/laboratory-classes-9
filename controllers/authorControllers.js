const Author = require('../models/Author');

// GET /api/authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/authors/:id
exports.updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Author.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updated) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};