import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*, ::after, ::before {
  box-sizing: border-box;
}


body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  font-size: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
}

  
h1,h2{
  padding: 0;
  margin: 0;
  list-style: none;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button, input {
  font-family: inherit;
  font-size:inherit;
  border: none;
}
  
button {
  background-color: transparent;
  cursor: pointer;
}

a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }


`;

export default GlobalStyles;
