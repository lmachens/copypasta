import React from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  border: 5px solid #ab9df2;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  flex-grow: 1;
  padding: 20px;
  margin-top: 10px;
  resize: vertical;
`;

export default function PasteArea(props) {
  return <TextArea placeholder="text goes here..." {...props} />;
}
