import styled from '@emotion/styled';

const ButtonContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  @media (min-width: 768px) {
    justify-content: flex-start;
    & > * {
      margin: 0 30px;
    }
  }
`;

export default ButtonContainer;
