import React from 'react';
import styled from '@emotion/styled';
import Loading from '../components/Loading';
import Alert from '../components/notifications/Alert';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/layout/FullContainer';
import PropTypes from 'prop-types';
import PasteBody from '../components/PasteBody';
import WarningButton from '../components/WarningButton';
import useDeletePaste from '../hooks/useDeletePaste';
import { useParams } from 'react-router-dom';

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Paste({ embedded }) {
  const { pasteId } = useParams();
  const [{ paste, error, loading }, doGet] = useGetPaste(pasteId);
  const [oneTimeActive, doDelete] = useDeletePaste(pasteId);

  return (
    <FullContainer>
      {loading && <Loading />}
      {error && (
        <>
          <Alert>Can not get paste!</Alert>
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
  embedded: PropTypes.bool,
};

export default Paste;
