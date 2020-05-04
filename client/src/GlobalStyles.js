import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        html {
          font-size: 16px;
        }
        body {
          margin: 0;
          font-family: RobotoMono-Regular, Roboto Mono;
        }
      `}
    />
  );
}

export default GlobalStyle;
