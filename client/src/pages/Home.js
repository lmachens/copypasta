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
import Selector from "../components/SelectTime";

const PasteAreaStyled = styled(PasteArea)`
  margin: 20px;
`;

export default function Home() {
  const [pasteValue, setPasteValue] = React.useState("");
  const [{ pasteId, error, loading }, doPost] = usePostPaste();
  const [time, setTime] = React.useState(-1);

  if (pasteId) return <Redirect to={`/${pasteId}`} />;

  return (
    <FullContainer>
      <Logo />
      <PasteAreaStyled
        value={pasteValue}
        onChange={event => setPasteValue(event.target.value)}
      />
      <Selector
        value={time}
        onChange={event => setTime(parseInt(event.target.value))}
      ></Selector>
      <SubmitButton
        onClick={() => doPost(pasteValue, time)}
        disabled={!pasteValue || loading}
      />
      {loading && <Loading />}
      {error && (
        <Alert>
          <div>☠️☠️☠️</div>Can not post paste! Please try again.
        </Alert>
      )}
    </FullContainer>
  );
}
