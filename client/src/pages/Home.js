import React from "react";
import Logo from "../icons/Logo";
import PasteArea from "../components/PasteArea";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import { Redirect } from "react-router-dom";
import FullContainer from "../components/FullContainer";
import usePostPaste from "../hooks/usePostPaste";
import RandomButton from "../components/RandomButton";
import { useHistory } from "react-router-dom";
import { getRandomPaste } from "../api/pastes";

const PasteAreaStyled = styled(PasteArea)`
  margin: 20px;
`;

export default function Home() {
  const [pasteValue, setPasteValue] = React.useState("");
  const [{ pasteId, error, loading }, doPost] = usePostPaste();

  const history = useHistory();

  async function handleRandomClick() {
    const paste = await getRandomPaste();
    history.push(`/${paste._id}`);
  }

  if (pasteId) return <Redirect to={`/${pasteId}`} />;

  return (
    <FullContainer>
      <Logo />
      <PasteAreaStyled
        value={pasteValue}
        onChange={event => setPasteValue(event.target.value)}
      />
      <SubmitButton
        onClick={() => doPost(pasteValue)}
        disabled={!pasteValue || loading}
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
