import React from 'react';
import styled from '@emotion/styled';

const EmbedCheckbox = styled.input``;

const EmbedCheckContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export default function EmbedCheck() {
  return (
    <>
      <EmbedCheckContainer>
        Should your paste be embeddable?
        <EmbedCheckbox type="checkbox" />
      </EmbedCheckContainer>
    </>
  );
}
