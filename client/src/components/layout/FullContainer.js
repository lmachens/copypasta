import styled from '@emotion/styled';

const FullContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: center;
  min-height: 100vh;
  max-width: 850px;
  padding: 20px;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

export default FullContainer;
