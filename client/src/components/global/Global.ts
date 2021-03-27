import { createGlobalStyle } from 'styled-components';

const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
`;

const head = document.getElementsByTagName('head')[0];
const style = document.createElement('style');
style.innerHTML = fontStyle;
head.appendChild(style);

const GlobalStyle = createGlobalStyle`
  * {    
    font-family: 'Syne Mono', monospace;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;

export default GlobalStyle;
