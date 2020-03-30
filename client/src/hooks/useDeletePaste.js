import React from 'react';
import { deletePaste } from '../api/pastes';

export default function useDeletePaste(pasteId) {
  const [oneTimeActive, setOneTimeActive] = React.useState(false);

  async function doDelete() {
    try {
      setOneTimeActive(true);
      await deletePaste(pasteId);
    } catch (error) {
      console.error(error);
    }
  }

  return [oneTimeActive, doDelete];
}
