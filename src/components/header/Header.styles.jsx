import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 12vh;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: space-around;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.size[20]};
  `}
`;

export const Navbar = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing[24]};
  `}
`;

export const TextLink = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.size[12]};
    font-weight: ${theme.font.weight[700]};
    border-bottom: ${theme.spacing[2]} solid
      ${({ isActive }) =>
        isActive ? theme.colors.primary : theme.colors.background};
    transition: border-bottom ${theme.transition.normal};

    &:hover,
    &:focus {
      border-bottom: ${theme.spacing[2]} solid;
    }
  `}
`;
