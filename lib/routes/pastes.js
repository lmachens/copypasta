const { decrypt, encrypt } = require('../crypto');
const { Router } = require('express');
const { sendToSlack } = require('../models/notifications');
const {
  getPaste,
  getPastes,
  deletePaste,
  setPaste,
  getRandomPaste,
  incrementPastaPoints,
} = require('../models/pastes');

const router = Router();

router.get('/random', async (request, response) => {
  try {
    const paste = await getRandomPaste();
    return response.json(paste);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

router.get('/:id', async (request, response) => {
  try {
    const pasteId = request.params.id;
    const paste = await getPaste(pasteId);
    return response.json(paste);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

router.get('/', async (request, response) => {
  const { author } = request.query;
  const query = {};
  if (author) {
    query.author = author;
  }
  const pastes = await getPastes(query);
  response.json(pastes);
});

router.delete('/:id', async (request, response) => {
  try {
    const pasteId = request.params.id;
    await deletePaste(pasteId);
    response.end('Deleted');
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

router.post('/', async (request, response) => {
  try {
    const { password, ...paste } = request.body;

    if (paste.isEncrypted) {
      paste.value = encrypt(paste.value, password);
    }
    const id = await setPaste(paste);

    const slackMessage = {
      text: `${paste.author}: \n${paste.value}`,
    };
    await sendToSlack(slackMessage);

    return response.json(id);
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

router.post('/:id/pastaPoints', async (request, response) => {
  try {
    const pasteId = request.params.id;
    const paste = await incrementPastaPoints(pasteId);
    return response.json(paste);
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

router.post('/:id/decrypt', async (request, response) => {
  try {
    const pasteId = request.params.id;
    const { password } = request.body;

    const paste = await getPaste(pasteId);
    const decryptedValue = decrypt(paste.value, password);

    response.json(decryptedValue);
  } catch (error) {
    console.error(error);
    response.status(400).end(error.reason);
  }
});

module.exports = router;
