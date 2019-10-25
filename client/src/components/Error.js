import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const flyFromRight = keyframes`
0% {
  right: -500px;
}

10%, 90% {
  right: 20px;
}

100% {
  right: -500px;
}
`;

const Container = styled.div`
  border: 5px solid red;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  margin: 10px;
  padding: 20px;
  text-align: center;
  position: fixed;
  right: -500px;
  top: 20px;
  background: #fff;
  animation: ${flyFromRight} 5s ease-in-out;
`;

export default function Error({ children, onClose }) {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <Container onClick={onClose}>{children}</Container>;
}
