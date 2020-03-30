import React from 'react';
import Loading from '../components/Loading';
import Alert from '../components/Alert';
import styled from '@emotion/styled';
import DateTime from '../components/DateTime';
import useGetPaste from '../hooks/useGetPaste';
import Button from '../components/Button';
import FullContainer from '../components/FullContainer';
import Author from '../components/Author';
import PropTypes from 'prop-types';
import EmbedButton from '../components/EmbedButton';
import PastaPoints from '../components/PastaPoints';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Paste({ match, embedded }) {
  const { pasteId } = match.params;
  const [{ paste, error, loading }, doGet] = useGetPaste(pasteId);

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
          <CreatedAt date={new Date(paste.createdAt)}>
            {new Date(paste.createdAt).toDateString()}
          </CreatedAt>
          <Author name={paste.author} />
          <PastaPoints pastaPoints={paste.pastaPoints} pasteId={pasteId} />
          <PasteArea>{paste.value}</PasteArea>
          {!embedded && paste.isEmbeddable && <EmbedButton pasteId={pasteId} />}
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
