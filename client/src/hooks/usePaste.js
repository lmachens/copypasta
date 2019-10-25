import React from "react";
import { getPaste } from "../api/pastes";

export default function usePaste(pasteId) {
  const [paste, setPaste] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function doFetch() {
    try {
      setLoading(true);
      setError(false);
      const paste = await getPaste(pasteId);
      setPaste(paste);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    doFetch();
  }, [pasteId]);

  return [{ paste, error, loading }, doFetch];
}
