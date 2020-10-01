import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
*:focus {
    outline: 0;
  }
html {
  font-size: 62.5%; /* 10px */
}
body {
  background-color: #f3f3f4;
  /* background: red; */
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body, input, button {
  font: 1.4rem 'Roboto', sans-serif;
  line-height: 1.6;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
ul {
  list-style: none
}
`;
