import React from 'react';
import styled from '@emotion/styled';
import { fadeIn } from '../utils/animations';

const Fork = styled.path`
  fill: #505050;
`;

const Text = styled.text`
  fill: #a9dc76;
  font-size: 62px;
  letter-spacing: 0.01em;
  animation: ${fadeIn} 3s ease-out 1 both;
`;

const PastaText = styled.tspan`
  fill: #ff6188;
`;

const HelloPastersText = styled.text`
  fill: #ffd866;
  font-size: 12px;
  letter-spacing: 0.02em;
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-delay: 1s;
`;

export default function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="327.365"
      viewBox="0 0 300.775 327.365"
      {...props}
    >
      <g transform="translate(-760.807 -114.635)">
        <Fork
          d="M134.3,2,113.945,20.445,129.21,35.711l19.4-19.4ZM93.591,24.262a10.111,10.111,0,0,0-7.951,7.156A10.223,10.223,0,0,0,88.5,41.753l76.326,76.326a10.179,10.179,0,1,0,14.311-14.311L102.814,27.442a10.215,10.215,0,0,0-8.269-3.18Zm69.33,5.088-19.4,19.4,14.311,14.311,19.082-19.4ZM71.012,47.478A10.626,10.626,0,0,0,69.1,47.8a10.111,10.111,0,0,0-7.951,7.156,10.223,10.223,0,0,0,2.862,10.336L145.43,146.7a29.78,29.78,0,0,1,9.223,22.262V225.89h20.354V168.964a52.056,52.056,0,0,0-15.265-36.891L78.326,50.658A10.172,10.172,0,0,0,71.012,47.478Zm119.26,10.495-19.4,19.4,15.265,15.265,18.445-20.354ZM52.884,71.33,38.573,83.415c-14.232,12.2-20.433,30.411-19.4,47.7A58.886,58.886,0,0,1,2,176.914l27.35,27.668a59.143,59.143,0,0,1,45.8-17.491,59.654,59.654,0,0,0,48.022-19.082l13.039-13.357L115.853,134.3,99.634,148.61A10.12,10.12,0,0,1,85.323,134.3l15.265-15.265L86.595,104.722,71.33,119.988a10.12,10.12,0,0,1-14.311-14.311L73.238,91.683Z"
          transform="translate(857 216.11)"
        />
        <Text transform="matrix(0.719, -0.695, 0.695, 0.719, 874.298, 227.384)">
          <tspan x="-75.342" y="0">
            copy
          </tspan>
          <PastaText x="-94.255" y="55">
            pasta
          </PastaText>
        </Text>
        <HelloPastersText transform="translate(968.672 318.828) rotate(45)">
          <tspan x="-66.851" y="0">
            (‘hello pasters’){' '}
          </tspan>
        </HelloPastersText>
      </g>
    </svg>
  );
}
