import React from "react";
import Loading from "../components/Loading";
import Alert from "../components/Alert";
import styled from "styled-components";
import DateTime from "../components/DateTime";
import useGetPaste from "../hooks/useGetPaste";
import Button from "../components/Button";
import FullContainer from "../components/FullContainer";

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

export default function Paste({ match }) {
  const [{ paste, error, loading }, doGet] = useGetPaste(match.params.pasteId);

  return (
    <FullContainer>
      {loading && <Loading />}
      {error && (
        <>
          <Alert>
            <div>☠️☠️☠️</div>Can not get paste!
          </Alert>
          <Button onClick={doGet}>Try again</Button>
        </>
      )}
      {paste && (
        <>
          <CreatedAt date={new Date(paste.createdAt)}>
            {new Date(paste.createdAt).toDateString()}
          </CreatedAt>
          <PasteArea>{paste.value}</PasteArea>
        </>
      )}
    </FullContainer>
  );
}
