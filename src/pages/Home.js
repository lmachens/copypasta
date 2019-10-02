import React from "react";
import Logo from "../icons/Logo";
import PasteArea from "../components/PasteArea";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import { postPaste } from "../api/pastes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const PasteAreaStyled = styled(PasteArea)`
  margin: 20px;
`;

export default function Home() {
  const [paste, setPaste] = React.useState("");

  function handleChange(event) {
    setPaste(event.target.value);
  }

  function handleClick() {
    if (paste) {
      postPaste(paste);
    }
  }

  return (
    <Container>
      <Logo />
      <PasteAreaStyled value={paste} onChange={handleChange} />
      <SubmitButton onClick={handleClick} disabled={!paste} />
    </Container>
  );
}
