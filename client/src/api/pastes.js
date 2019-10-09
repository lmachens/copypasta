export function getPaste(pasteId) {
  return fetch(`/api/pastes/${pasteId}`, {
    method: "GET"
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
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paste)
  }).then(response => response.json());
}
