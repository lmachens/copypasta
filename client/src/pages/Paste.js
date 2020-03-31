import React from 'react';
import styled from '@emotion/styled';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import PropTypes from 'prop-types';
import PasteBody from '../components/PasteBody';
import WarningButton from '../components/WarningButton';
import useDeletePaste from '../hooks/useDeletePaste';

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Paste({ match, embedded }) {
  const { pasteId } = match.params;
  const [{ paste, error, loading }, doGet] = useGetPaste(pasteId);
  const [oneTimeActive, doDelete] = useDeletePaste(pasteId);

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
        <Content>
          {!paste.oneTimeView && (
            <PasteBody paste={paste} embedded={embedded} />
          )}
          {paste.oneTimeView && (
            <>
              {!oneTimeActive && (
                <>
                  <label>You can see it only once. Are you ready?</label>
                  <WarningButton onClick={doDelete}>YES!!!</WarningButton>
                </>
              )}
              {oneTimeActive && (
                <PasteBody
                  paste={paste}
                  pasteId={pasteId}
                  embedded={embedded}
                  oneTimeActive={oneTimeActive}
                />
              )}
            </>
          )}
        </Content>
      )}
    </FullContainer>
  );
}

Paste.propTypes = {
  match: PropTypes.object,
  embedded: PropTypes.bool
};

export default Paste;
