const { Router } = require('express');
const { getPaste } = require('../models/pastes');
const fetch = require('node-fetch');

const router = Router();

router.post('/send', async (request, response) => {
  try {
    const { email, pasteId } = request.body;
    const paste = await getPaste(pasteId);

    const emailBody = {
      personalizations: [
        {
          to: [{ email: `${email}`, name: 'John Doe' }],
          subject: 'Your pasta 🤪!',
        },
      ],
      content: [
        { type: 'text/html', value: `${paste.author}: ${paste.value}` },
      ],
      from: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍝' },
      reply_to: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍜' },
    };

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_TOKEN}`,
      },
      body: JSON.stringify(emailBody),
    });
    response.end('Email sent');
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

module.exports = router;
