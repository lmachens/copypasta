import React from "react";
import Logo from "../icons/Logo";
import PasteArea from "../components/PasteArea";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { Redirect, useHistory } from "react-router-dom";
import FullContainer from "../components/FullContainer";
import usePostPaste from "../hooks/usePostPaste";
import RandomButton from "../components/RandomButton";
import { getRandomPaste } from "../api/pastes";
import AuthorInput from "../components/AuthorInput";
import SelectTime from "../components/SelectTime";

const PasteAreaStyled = styled(PasteArea)`
  margin: 20px;
`;

export default function Home({ onPaste }) {
  const [pasteValue, setPasteValue] = React.useState("");
  const [{ pasteId, error, loading }, doPost] = usePostPaste();
  const [author, setAuthor] = React.useState("");
  const [expireTime, setExpireTime] = React.useState(-1);

  React.useEffect(() => {
    if (pasteId) {
      onPaste(pasteId);
    }
  }, [pasteId]);

  const history = useHistory();

  async function handleRandomClick() {
    const paste = await getRandomPaste();
    history.push(`/${paste._id}`);
  }

  if (pasteId) return <Redirect to={`/${pasteId}`} />;

  return (
    <FullContainer>
      <Logo />
      <AuthorInput
        value={author}
        onChange={event => setAuthor(event.target.value)}
      />
      <PasteAreaStyled
        value={pasteValue}
        onChange={event => setPasteValue(event.target.value)}
      />
      <SelectTime
        value={expireTime}
        onChange={event => setExpireTime(parseInt(event.target.value))}
      ></SelectTime>
      <SubmitButton
        onClick={() => doPost({ value: pasteValue, author, expireTime })}
        disabled={!pasteValue || !author || loading}
      />
      <RandomButton onClick={handleRandomClick} />
      {loading && <Loading />}
      {error && (
        <Alert>
          <div>☠️☠️☠️</div>Can not post paste! Please try again.
        </Alert>
      )}
    </FullContainer>
  );
}
