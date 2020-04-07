import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import HotPastaVoteIcon from '../icons/HotPastaVoteIcon';
import { addPastaPoint } from '../api/pastes';

const Button = styled.button`
  border: 1.5px solid grey;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  margin: 10px;
  outline: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#FF9E99' : 'transparent')};
`;

function PastaPoints({ pastaPoints, pasteId }) {
  const [voted, setVoted] = React.useState(false);

  function handleClick() {
    addPastaPoint(pasteId);
    setVoted(true);
  }

  let totalPastaPoints = pastaPoints || 0;
  if (voted) {
    totalPastaPoints++;
  }
  return (
    <>
      <Button onClick={handleClick} disabled={voted}>
        <HotPastaVoteIcon />
      </Button>
      <div>{totalPastaPoints} Pasta Points</div>
    </>
  );
}

PastaPoints.propTypes = {
  pastaPoints: PropTypes.number,
  pasteId: PropTypes.string,
};

export default PastaPoints;
