// Load environment variables from .env file
require('dotenv').config();
const express = require('express');
const path = require('path');
const { initDatabase } = require('./lib/database');
const { createIndexes } = require('./lib/models/pastes');
const pastes = require('./lib/routes/pastes');
const email = require('./lib/routes/email');

const app = express();

// Parse application/json for all request
app.use(express.json());

app.use('/api/pastes', pastes);
app.use('/api/email', email);

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
