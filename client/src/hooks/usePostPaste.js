import React from 'react';
import { postPaste, postPasteToSlack } from '../api/pastes';

function formatSlackPost(paste) {
  const slackPost = {
    text: `${paste.author}: \n${paste.value}`
  };
  return slackPost;
}

export default function usePostPaste() {
  const [pasteId, setPasteId] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function doPost(paste) {
    try {
      setLoading(true);
      setError(false);
      const pasteId = await postPaste(paste);
      const slackPost = formatSlackPost(paste);
      postPasteToSlack(slackPost);
      setPasteId(pasteId);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return [{ pasteId, error, loading }, doPost];
}
