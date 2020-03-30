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
    method: "DELETE"
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json());

export function addPastaPoint(pasteId) {
  return fetch(`/api/pastes/${pasteId}/pastaPoints`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());
}
