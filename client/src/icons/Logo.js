import React from 'react';
import styled from '@emotion/styled';
import { fadeIn } from '../utils/animations';

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
  left: 38px;
  top: 39px;
  transform: rotate(45deg);
  fill: #ffd866;
  font-size: 5px;
  letter-spacing: 0.02em;
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-delay: 1s;
  color: #fad878;
  @media (min-width: 768px) {
    left: 92px;
    top: 118px;
    font-size: 13px;
  }
`;

const CopyText = styled.span`
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-delay: 1s;
  color: #b4d982;
  @media (min-width: 768px) {
    position: absolute;
    transform: rotate(-45deg);
    left: -63px;
    top: -39px;
  }
`;
const PastaText = styled.span`
  animation: ${fadeIn} 3s ease-out 1 both;
  animation-delay: 1s;
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
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 204 226"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M133.226 6.10352e-05L112.729 18.6189L128.1 34.0288L147.636 14.4459L133.226 6.10352e-05ZM92.2321 22.4719C90.3572 22.805 88.6131 23.6584 87.1978 24.9353C85.7825 26.2121 84.7527 27.8612 84.2254 29.6953C83.6946 31.531 83.6828 33.4784 84.1914 35.3204C84.6999 37.1624 85.7087 38.8267 87.1055 40.1277L163.966 117.173C164.868 118.298 165.996 119.219 167.277 119.878C168.558 120.536 169.962 120.917 171.4 120.995C172.837 121.073 174.275 120.847 175.619 120.331C176.964 119.815 178.185 119.021 179.202 118.001C180.22 116.98 181.012 115.756 181.527 114.409C182.042 113.061 182.268 111.62 182.19 110.179C182.112 108.738 181.732 107.33 181.075 106.046C180.418 104.762 179.499 103.631 178.377 102.727L101.52 25.6818C100.461 24.5545 99.1629 23.6806 97.7214 23.1249C96.2799 22.5692 94.7321 22.346 93.1928 22.4719H92.2321ZM162.047 27.6078L142.512 47.1906L156.923 61.6365L176.138 42.0537L162.047 27.6078ZM69.4951 45.9067C68.8447 45.956 68.2002 46.0648 67.5697 46.2317C65.6948 46.5648 63.9507 47.4183 62.5354 48.6951C61.12 49.972 60.0903 51.6211 59.563 53.4551C59.0322 55.2912 59.0207 57.2389 59.5295 59.0811C60.0384 60.9233 61.0478 62.5877 62.4451 63.8885L144.434 146.064C147.458 148.954 149.847 152.446 151.446 156.316C153.046 160.186 153.821 164.348 153.722 168.536V226H174.218V168.538C174.226 161.622 172.873 154.773 170.235 148.382C167.597 141.992 163.727 136.187 158.846 131.299L76.8603 49.1166C75.9116 48.1118 74.7702 47.3095 73.5046 46.7579C72.2389 46.2063 70.8751 45.9168 69.4951 45.9067ZM189.59 56.5006L170.054 76.0834L185.426 91.4923L204 70.9464L189.59 56.5006ZM51.2402 69.9835L36.829 82.1823C22.4974 94.4973 16.253 112.88 17.2932 130.332C17.8838 138.83 16.6453 147.356 13.6617 155.332C10.678 163.309 6.0189 170.549 0 176.563L27.5414 204.491C33.5227 198.414 40.7346 193.693 48.6907 190.647C56.6469 187.602 65.1621 186.302 73.662 186.835C82.6475 187.464 91.659 186.06 100.03 182.726C108.4 179.391 115.916 174.213 122.02 167.574L135.15 154.091L114.65 133.547L98.3174 147.992C96.3977 149.864 93.8196 150.904 91.1411 150.886C88.4625 150.867 85.8988 149.793 84.0047 147.894C82.1106 145.995 81.0383 143.426 81.0199 140.741C81.0014 138.056 82.0383 135.471 83.9062 133.547L99.2781 118.138L85.1871 103.69L69.8153 119.1C67.8972 120.981 65.3162 122.029 62.6326 122.014C59.949 121.999 57.3794 120.924 55.4818 119.022C53.5842 117.12 52.5117 114.544 52.4971 111.854C52.4826 109.164 53.5272 106.577 55.4041 104.654L71.7366 90.5283L51.2402 69.9835Z"
            fill="#505050"
          />
        </svg>

        <HelloPastersText>(&apos;hello pasters&apos;)</HelloPastersText>
        <CopyText>copy</CopyText>
        <PastaText>pasta</PastaText>
      </IconFrame>
    </LogoContainer>
  );
}
