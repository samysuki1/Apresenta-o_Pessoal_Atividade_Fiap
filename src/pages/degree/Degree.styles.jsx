import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[8]};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.size[20]};
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight[700]};
  `}
`;

export const Content = styled.div`
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
      font-weight: ${theme.font.weight[700]};
    }
  `}
`;