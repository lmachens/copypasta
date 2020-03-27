import React from 'react';
import { setVote, getPaste } from '../api/pastes';

export default function useSetVote(pasteId) {
  const [voteCount, setVoteCount] = React.useState();
  const [error, setError] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  async function setPastaPoints() {
    const paste = await getPaste(pasteId);
    setVoteCount(paste.pastaPoints);
  }

  async function doSetVote() {
    try {
      setError(false);
      const updatedPaste = await setVote(pasteId);
      setClicked(true);
      setVoteCount(updatedPaste.pastaPoints);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  React.useEffect(() => {
    setPastaPoints();
  }, []);

  return [{ voteCount, clicked, error }, doSetVote];
}
