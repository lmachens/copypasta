const apiEndpoint = process.env.REACT_APP_API_URL || "http://localhost:8080";

export function getPaste(pasteId) {
  return fetch(`${apiEndpoint}/pastes/${pasteId}`, {
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
  return fetch(`${apiEndpoint}/pastes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paste)
  }).then(response => response.json());
}
