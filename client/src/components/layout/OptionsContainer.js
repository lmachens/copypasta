import styled from '@emotion/styled';

const OptionsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  border: 5px solid #b4d982;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  flex-basis: 100%;
  @media (min-width: 768px) {
    flex-basis: 48%;
    margin-left: 10px;
  }
`;

export default OptionsContainer;
