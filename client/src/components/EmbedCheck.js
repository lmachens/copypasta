import React from 'react';
import styled from '@emotion/styled';

const EmbedCheckbox = styled.input``;

const EmbedCheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export default function EmbedCheck(props) {
  return (
    <>
      <EmbedCheckContainer>
        Should your pasta be embeddable?
        <EmbedCheckbox type="checkbox" {...props} />
      </EmbedCheckContainer>
    </>
  );
}
