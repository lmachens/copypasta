import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  margin: 0;
  font-family: RobotoMono-Regular, Roboto Mono;
}
`;
