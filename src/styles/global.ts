import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Roboto, sans-serif;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    height: 100%
  }

  body {
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    background: #f2f2f2;
  }
`;
