import React from 'react';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import PropTypes from 'prop-types';
import PasteBody from '../components/PasteBody';
import WarningButton from '../components/WarningButton';
import useDeletePaste from '../hooks/useDeletePaste';

function Paste({ match }) {
  const [{ paste, error, loading }, doGet] = useGetPaste(match.params.pasteId);
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
        </>
      )}
    </FullContainer>
  );
}

Paste.propTypes = {
  match: PropTypes.object
};

export default Paste;
