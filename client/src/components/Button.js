import styled from "styled-components";

const Button = styled.button`
  background: #a9dc76;
  box-shadow: 0px 5px 0px #b4b4b4;
  border-radius: 15px;
  font-size: 22px;
  color: #505050;
  padding: 4px 15px;
  cursor: pointer;

  &:disabled {
    color: #505050;
    background: #909090;
  }
`;

export default Button;
