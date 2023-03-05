import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  * {
    box-sizing: border-box;
  }
`;
