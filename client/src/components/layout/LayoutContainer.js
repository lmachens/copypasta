import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  margin: 2.5% 5%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  & > * {
    margin: 10px 0px;
  }
  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export default LayoutContainer;
