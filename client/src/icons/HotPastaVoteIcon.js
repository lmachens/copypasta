import React from 'react';
import styled from '@emotion/styled';
import HotPastaIcon from './HotPastaIcon.svg';

const HotPasta = styled.img`
  width: 50px;
`;

function HotPastaVoteIcon() {
  return <HotPasta src={HotPastaIcon} alt=""></HotPasta>;
}

export default HotPastaVoteIcon;
