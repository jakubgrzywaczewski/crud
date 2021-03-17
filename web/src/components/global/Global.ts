import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');

    * {
      font-family: 'Syne Mono', monospace;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
`;

export default GlobalStyle;
