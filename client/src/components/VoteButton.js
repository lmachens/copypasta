import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import HotPastaVoteIcon from '../icons/HotPastaVoteIcon';

const Button = styled.button`
  border: 1.5px solid grey;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  margin: 10px;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.disabled ? '#FF9E99' : 'transparent')};
`;

function VoteButton({ onVoteButtonClick, disabled, pastaPoints }) {
  return (
    <>
      <Button onClick={onVoteButtonClick} disabled={disabled}>
        <HotPastaVoteIcon />
      </Button>
      <div>{!pastaPoints ? 0 : pastaPoints} Pasta Points</div>
    </>
  );
}

VoteButton.propTypes = {
  onVoteButtonClick: PropTypes.func,
  disabled: PropTypes.bool,
  pastaPoints: PropTypes.number
};

export default VoteButton;
