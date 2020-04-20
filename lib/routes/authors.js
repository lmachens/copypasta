const { Router } = require('express');
const { findAuthors } = require('../models/pastes');

const router = Router();

router.get('/', async (request, response) => {
  const { q } = request.query;
  const query = {};
  if (q) {
    query.author = new RegExp(q, 'i');
  }
  const authors = await findAuthors(query);
  response.json(authors);
});

module.exports = router;
