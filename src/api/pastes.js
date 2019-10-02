const apiEndpoint = "http://localhost:8080";
export function postPaste(paste) {
  return fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(paste)
  });
}
