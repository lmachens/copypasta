const { Router } = require('express');
const fetch = require('node-fetch');
const { getPaste } = require('../models/pastes');

const router = Router();

router.post('/', async (request, response) => {
  try {
    const { pasteId } = request.body;
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

module.exports = router;
