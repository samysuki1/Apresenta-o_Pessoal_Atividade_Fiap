/* eslint-disable no-unused-vars */
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

export const Description = styled.p`
  ${({ theme }) => css`
    width: 60%;
  `}
`;

export const SearchContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing[8]};
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
