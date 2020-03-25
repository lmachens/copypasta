import GlobalStyles from "../src/GlobalStyles";
import styled from "@emotion/styled";
import { configure, addDecorator } from "@storybook/react";
import React from "react";

const Main = styled.div`
  margin: 10px;
`;
// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <Main>
    <GlobalStyles />
    {storyFn()}
  </Main>
);
addDecorator(GlobalStyleDecorator);

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
