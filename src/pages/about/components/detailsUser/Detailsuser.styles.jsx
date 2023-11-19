import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[4]};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.second};

    span {
      color: ${theme.colors.primary};
    }
  `}
`;