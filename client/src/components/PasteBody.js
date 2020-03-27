import React from 'react';
import DateTime from './DateTime';
import Author from './Author';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const PasteArea = styled.div`
  margin: 20px;
`;

const CreatedAt = styled(DateTime)`
  margin: 10px;
`;

function PasteBody({ paste }) {
  return (
    <>
      <CreatedAt date={new Date(paste.createdAt)}>
        {new Date(paste.createdAt).toDateString()}
      </CreatedAt>
      <Author name={paste.author} />
      <PasteArea>{paste.value}</PasteArea>
    </>
  );
}

PasteBody.propTypes = {
  paste: PropTypes.object,
  isActive: PropTypes.bool,
  setIsActive: PropTypes.func
};

export default PasteBody;
