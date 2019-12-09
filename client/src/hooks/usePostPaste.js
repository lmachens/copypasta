import React from "react";
import { postPaste } from "../api/pastes";

export default function usePostPaste() {
  const [pasteId, setPasteId] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function doPost(pasteValue, time) {
    try {
      setLoading(true);
      setError(false);
      const pasteId = await postPaste({ value: pasteValue, expireTime: time });
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
