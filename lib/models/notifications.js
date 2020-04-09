const fetch = require('node-fetch');

function sendToSlack(message) {
  if (!process.env.SLACK_WEBHOOK_URL) {
    return console.warn('SLACK_WEBHOOK_URL is not set');
  }
  return fetch(process.env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

function sendToSendGrid(options) {
  if (!process.env.SENDGRID_API_TOKEN) {
    return console.warn('SENDGRID_API_TOKEN is not set');
  }

  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_API_TOKEN}`,
    },
    body: JSON.stringify(options),
  });
}

exports.sendToSlack = sendToSlack;
exports.sendToSendGrid = sendToSendGrid;
