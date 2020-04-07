const { decrypt, encrypt } = require('../crypto');
const { Router } = require('express');
const fetch = require('node-fetch');
const {
  getPaste,
  deletePaste,
  setPaste,
  getRandomPaste,
  incrementPastaPoints
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

router.delete('/:id', async (request, response) => {
  try {
    const pasteId = request.params.id;
    await deletePaste(pasteId);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

router.post('', async (request, response) => {
  try {
    const { password, ...paste } = request.body;

    if (paste.isEncrypted) {
      paste.value = encrypt(paste.value, password);
    }
    const id = await setPaste(paste);

    const slackMessage = {
      text: `${paste.author}: \n${paste.value}`
    };
    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(slackMessage)
    });

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

router.post('/api/report/:pasteId', async (request, response) => {
  try {
    const pasteId = request.params.pasteId;
    const paste = await getPaste(pasteId);
    const reportIcon = '🚨REPORT🚨';
    const pasteLink = `${request.headers.host}/pastes/${paste._id}`;
    const slackMessage = {
      text: `${reportIcon} \n===\n${paste.author}: \n"${paste.value}"\n=== \nID: ${paste._id} \n${pasteLink} \n${reportIcon}`
    };

    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(slackMessage)
    });
    response.end('Notification sent');
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

router.post('/api/email/send', async (request, response) => {
  try {
    const { email, pasteId } = request.body;
    const paste = await getPaste(pasteId);

    const emailBody = {
      personalizations: [
        {
          to: [{ email: `${email}`, name: 'John Doe' }],
          subject: 'Your pasta 🤪!'
        }
      ],
      content: [
        { type: 'text/html', value: `${paste.author}: ${paste.value}` }
      ],
      from: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍝' },
      reply_to: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍜' }
    };

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_TOKEN}`
      },
      body: JSON.stringify(emailBody)
    });
    response.end('Email sent');
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

router.post('/api/decrypt', async (request, response) => {
  try {
    const { pasteId, password } = request.body;

    const paste = await getPaste(pasteId);
    const decryptedValue = decrypt(paste.value, password);

    response.json(decryptedValue);
  } catch (error) {
    console.error(error);
    response.status(400).end(error.reason);
  }
});

module.exports = router;
