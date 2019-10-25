import React from "react";
import Logo from "../icons/Logo";
import PasteArea from "../components/PasteArea";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
import { postPaste } from "../api/pastes";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Redirect } from "react-router-dom";
import FullContainer from "../components/FullContainer";

const PasteAreaStyled = styled(PasteArea)`
  margin: 20px;
`;

export default function Home() {
  const [paste, setPaste] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [redirectToPaste, setRedirectToPaste] = React.useState(null);

  function handleChange(event) {
    setPaste(event.target.value);
  }

  async function handleClick() {
    if (!paste) {
      return;
    }
    try {
      setError(false);
      setLoading(true);
      const newPaste = await postPaste({
        value: paste
      });
      setRedirectToPaste(newPaste.id);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (redirectToPaste) return <Redirect to={`/${redirectToPaste}`} />;

  return (
    <FullContainer>
      <Logo />
      <PasteAreaStyled value={paste} onChange={handleChange} />
      <SubmitButton onClick={handleClick} disabled={!paste || loading} />
      {loading && <Loading />}
      {error && (
        <Error onClose={() => setError(false)}>
          <div>☠️☠️☠️</div>Can not post paste! Please try again.
        </Error>
      )}
    </FullContainer>
  );
}
