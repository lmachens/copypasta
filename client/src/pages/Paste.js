import React from 'react';
import styled from "@emotion/styled";
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import PropTypes from 'prop-types';
import PasteBody from '../components/PasteBody';
import WarningButton from '../components/WarningButton';
import useDeletePaste from '../hooks/useDeletePaste';
import PastaPoints from '../components/PastaPoints';
import DateTime from '../components/DateTime';
import Author from '../components/Author';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function Paste({ match }) {
  const { pasteId } = match.params;
  const [{ paste, error, loading }, doGet] = useGetPaste(pasteId);
  const [{ oneTimeActive }, doDelete] = useDeletePaste(match.params.pasteId);
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
      {paste && !paste.oneTimeView && <PasteBody paste={paste} />}
      {paste && paste.oneTimeView && (
        <>
          {!oneTimeActive && (
            <>
              <label>You can see it only once. Are you ready?</label>
              <WarningButton onClick={doDelete}>YES!!!</WarningButton>
            </>
          )}
          {oneTimeActive && <PasteBody paste={paste} />}
          <CreatedAt date={new Date(paste.createdAt)}>
            {new Date(paste.createdAt).toDateString()}
          </CreatedAt>
          <Author name={paste.author} />
          <PastaPoints pastaPoints={paste.pastaPoints} pasteId={pasteId} />
          <PasteArea>{paste.value}</PasteArea>
        </>
      )}
    </FullContainer>
  );
}

Paste.propTypes = {
  match: PropTypes.object
};

export default Paste;
