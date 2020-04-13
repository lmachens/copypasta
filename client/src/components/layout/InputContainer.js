import styled from '@emotion/styled';

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-basis: 100%;
  align-items: space-between;
  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

export default InputContainer;
