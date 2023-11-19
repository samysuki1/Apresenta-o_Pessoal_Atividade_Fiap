import styled, { keyframes, css } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

export const SkeletonWrapper = styled.div`
  ${({ theme }) => css`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "16px")};
    border-radius: ${theme.border.radius[2]};
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200%;
    animation: ${shimmer} 1.5s infinite;
  `}
`;
