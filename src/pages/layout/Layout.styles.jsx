/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[64]};
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    gap: ${theme.spacing[64]};
  `}
`;

export const ContentImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 310px;
    justify-content: flex-end;
  `}
`;