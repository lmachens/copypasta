import React from "react";
import { getPaste } from "../api/pastes";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styled from "styled-components";

const PasteArea = styled.div`
  margin: 20px;
`;

export default function Paste({ match }) {
  const [paste, setPaste] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getPaste(match.params.pasteId)
      .then(paste => {
        setPaste(paste);
      })
      .catch(error => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [match.params.pasteId]);

  return (
    <div>
      {loading && <Loading />}
      {error && (
        <Error>
          <div>☠️☠️☠️</div>Can not get paste! Please try again.
        </Error>
      )}
      <PasteArea>{paste.value}</PasteArea>
    </div>
  );
}
