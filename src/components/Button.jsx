import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    font-weight: ${theme.font.weight[600]};
    width: 138px;
    height: 38px;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius[4]};
    color: ${theme.colors.background};
    font-size: ${theme.font.size[9]};
    cursor: pointer;
    transition: opacity ${theme.transition.default};

    &:hover {
      opacity: 0.8;
    }
  `}
`;
