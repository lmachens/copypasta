import React from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styled from "styled-components";
import DateTime from "../components/DateTime";
import usePaste from "../hooks/usePaste";
import Button from "../components/Button";
import FullContainer from "../components/FullContainer";

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

export default function Paste({ match }) {
  const [{ paste, error, loading }, doFetch] = usePaste(match.params.pasteId);

  return (
    <FullContainer>
      {loading && <Loading />}
      {error && (
        <>
          <Error>
            <div>☠️☠️☠️</div>Can not get paste!
          </Error>
          <Button onClick={doFetch}>Try again</Button>
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
