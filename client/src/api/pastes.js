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

// Could be in a seperate file =)
const SLACK_URL =
  'https://hooks.slack.com/services/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';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `${proxy}${SLACK_URL}`;

export function postPasteToSlack(paste) {
  const slackPost = {
    text: `${paste.author}: \n${paste.value}`
  };
  return fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(slackPost)
  });
}
