import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  max-width: 350px;
  margin: 2.5% 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 10px 0px;
  }
`;

export default LayoutContainer;
