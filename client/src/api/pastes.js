export function getPaste(pasteId) {
  return fetch(`/api/pastes/${pasteId}`, {
    method: 'GET',
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
}

export function getRandomPaste() {
  return fetch(`/api/pastes/random`, {
    method: 'GET',
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
}

export function postPaste(paste) {
  return fetch(`/api/pastes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Encrypt: 'true',
    },
    body: JSON.stringify(paste),
  }).then((response) => response.json());
}

export function reportPaste(pasteId) {
  return fetch(`/api/reports`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pasteId }),
  });
}

export function deletePaste(pasteId) {
  return fetch(`/api/pastes/${pasteId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());
}

export function addPastaPoint(pasteId) {
  return fetch(`/api/pastes/${pasteId}/pastaPoints`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

export function sendPastaViaMail(email, pasteId) {
  return fetch('/api/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      pasteId,
    }),
  });
}

export function getDecryptedValue(pasteId, password) {
  return fetch(`/api/pastes/${pasteId}/decrypt`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password,
    }),
  }).then((response) => response.json());
}
