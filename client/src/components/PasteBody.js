import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import DateTime from './DateTime';
import Author from './Author';
import PastaPoints from '../components/PastaPoints';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function PasteBody({ paste, pasteId }) {
  return (
    <>
      <CreatedAt date={new Date(paste.createdAt)}>
        {new Date(paste.createdAt).toDateString()}
      </CreatedAt>
      <Author name={paste.author} />
      <PastaPoints pastaPoints={paste.pastaPoints} pasteId={pasteId} />
      <PasteArea>{paste.value}</PasteArea>
    </>
  );
}

PasteBody.propTypes = {
  paste: PropTypes.object,
  pasteId: PropTypes.string
};

export default PasteBody;
