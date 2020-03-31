// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const { initDatabase } = require('./lib/database');
const {
  getPaste,
  deletePaste,
  setPaste,
  getRandomPaste,
  createIndexes,
  incrementPastaPoints
} = require('./lib/pastes');

const app = express();

// Parse application/json for all request
app.use(express.json());

app.get('/api/pastes/random', async (request, response) => {
  try {
    const paste = await getRandomPaste();
    return response.json(paste);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

app.get('/api/pastes/:id', async (request, response) => {
  try {
    const pasteId = request.params.id;
    const paste = await getPaste(pasteId);
    return response.json(paste);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

app.delete('/api/pastes/:id', async (request, response) => {
  try {
    const pasteId = request.params.id;
    await deletePaste(pasteId);
  } catch (error) {
    console.error(error);
    return response.status(404).end('Error');
  }
});

app.post('/api/pastes', async (request, response) => {
  try {
    const paste = request.body;
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

app.post('/api/pastes/:id/pastaPoints', async (request, response) => {
  try {
    const pasteId = request.params.id;
    const paste = await incrementPastaPoints(pasteId);
    return response.json(paste);
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

app.post('/api/report/:pasteId', async (request, response) => {
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
    return response.end('Notification sent');
  } catch (error) {
    console.error(error);
    response.status(400).end('Error');
  }
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

initDatabase(process.env.DB_URL, process.env.DB_NAME).then(async () => {
  console.log(`Database ${process.env.DB_NAME} is ready`);

  await createIndexes();
  console.log('Indexes created');

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
});
