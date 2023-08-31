import { createGlobalStyle } from 'styled-components';
import { GREY } from './colors';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'AgencyFB', sans-serif;
  }
  body {
    color: ${GREY};
    margin: 0;
  }
  a {
    text-decoration: none;
    white-space: nowrap;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
