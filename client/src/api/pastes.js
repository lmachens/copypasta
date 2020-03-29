export function getPaste(pasteId) {
  return fetch(`/api/pastes/${pasteId}`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

export function getRandomPaste() {
  return fetch(`/api/pastes/random`, {
    method: 'GET'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

export function postPaste(paste) {
  return fetch(`/api/pastes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paste)
  }).then(response => response.json());
}

export function deletePaste(pasteId) {
  return fetch(`/api/pastes/${pasteId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());
}

export function addPastaPoint(pasteId) {
  return fetch(`/api/pastes/${pasteId}/pastaPoints`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}

export function sendPastaViaMail(mailInputValue, pasteId) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const api = `${proxy}https://api.sendgrid.com/v3/mail/send`;

  const emailBody = {
    personalizations: [
      {
        to: [{ email: `${mailInputValue}`, name: 'John Doe' }],
        subject: 'Your pasta 🤪!'
      }
    ],
    content: [{ type: 'text/html', value: `${pasteId}` }],

    from: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍝' },

    reply_to: { email: 'copypaste@gmx.de', name: 'CopyPasta 🍜' }
  };

  // setApproval(true);

  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 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'
    },
    body: JSON.stringify(emailBody)
  });
}
