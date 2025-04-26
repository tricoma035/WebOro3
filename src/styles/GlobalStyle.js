import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    background: #f4f6fa;
    color: #1a2236;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', Arial, sans-serif;
    font-weight: 900;
    color: #1a2236;
    margin-top: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;