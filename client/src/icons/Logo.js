import React from 'react';
import styled from '@emotion/styled';
import { fadeIn } from '../utils/animations';
import logo from '../icons/logo.svg';

const LogoContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconFrame = styled.div`
  position: relative;
  height: 100px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 300px;
    font-size: 62px;
  }
`;

const HelloPastersText = styled.text`
  position: absolute;
  left: 22px;
  top: 39px;
  transform: rotate(45deg);
  fill: #ffd866;
  font-size: 5px;
  letter-spacing: 0.02em;
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-delay: 1s;
  color: #fad878;
  @media (min-width: 768px) {
    left: 77px;
    top: 118px;
    font-size: 13px;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const CopyText = styled.span`
  color: #b4d982;
  @media (min-width: 768px) {
    position: absolute;
    transform: rotate(-45deg);
    left: -63px;
    top: -39px;
  }
`;
const PastaText = styled.span`
  color: #ff6188;
  @media (min-width: 768px) {
    position: absolute;
    transform: rotate(-45deg);
    left: -38px;
    top: 1px;
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <IconFrame>
        <Image src={logo} alt="copypasta logo" />
        <HelloPastersText>(&apos;hello pasters&apos;)</HelloPastersText>
        <CopyText>copy</CopyText>
        <PastaText>pasta</PastaText>
      </IconFrame>
    </LogoContainer>
  );
}
