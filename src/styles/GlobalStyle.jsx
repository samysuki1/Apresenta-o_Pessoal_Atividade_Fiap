import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: ${({ theme }) => theme.font.size[10]};
    color: ${({ theme }) => theme.colors.second};
  }
`;
