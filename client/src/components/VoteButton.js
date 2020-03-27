import React from 'react';
import styled from '@emotion/styled';
import HotPastaVoteIcon from '../icons/HotPastaVoteIcon';

const Button = styled.button`
  border: 1.5px solid grey;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  margin: 10px;
  outline: none;
  cursor: pointer;

  :active {
    background-color: #ff6666;
  }
`;

function VoteButton() {
  return (
    <Button>
      <HotPastaVoteIcon />
    </Button>
  );
}

export default VoteButton;
