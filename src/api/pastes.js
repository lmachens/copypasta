const apiEndpoint = process.env.REACT_APP_API_URL || "http://localhost:8080";

export function getPaste(pasteId) {
  return fetch(`${apiEndpoint}/pastes/${pasteId}`, {
    method: "GET"
  }).then(response => response.json());
}

export function postPaste(paste) {
  return fetch(`${apiEndpoint}/pastes`, {
    method: "POST",
    body: JSON.stringify(paste)
  });
}
