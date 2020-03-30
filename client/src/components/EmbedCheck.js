import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 10px;
`;

function EmbedCheck(props) {
  return (
    <Label>
      Should your pasta be embeddable?
      <input type="checkbox" {...props} />
    </Label>
  );
}

export default EmbedCheck;
