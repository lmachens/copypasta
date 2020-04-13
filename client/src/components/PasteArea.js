import React from 'react';
import styled from '@emotion/styled';

const TextArea = styled.textarea`
  border: 5px solid #ab9df2;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 10px;
  resize: vertical;
`;

export default function PasteArea(props) {
  return <TextArea placeholder="text goes here..." {...props} />;
}
