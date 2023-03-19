import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --text-1: 0.5rem;
  --text-2: 1rem;
  --text-3: 1.5rem;
  --text-4: 2rem;
  --text-5: 2.5rem;
  --text-6: 3rem;
}
  html,
  body {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0;
    /* font-family: Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif; */
    font-family: 'EB Garamond', serif;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  h1 {
    font-size: var(--text-6);
  }

  h2 {
    font-size: var(--text-5);
   }  

  h3 {
    font-size: var(--text-3);
    margin-bottom: var(--text-2);
  }

  p {
    font-size: var(--text-2);
    margin-bottom: var(--text-1);
  }

  * {
    box-sizing: border-box;
  }
`;
