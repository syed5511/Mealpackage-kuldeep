import styled, { keyframes, css } from "styled-components";

const animation = (width) => keyframes`
  0% {
		background-position: -${width} 0;
  }
  
  100% {
		background-position: ${width} 0; 
  }
`;

export const Container = styled.div`
  ${({
    width,
    height,
    duration,
    borderRadius,
    primaryColor,
    secondaryColor,
  }) => css`
    width: ${width};
    height: ${height};

    &.circle {
      width: ${width};
      height: ${width};
      border-radius: ${width};
    }

    &.rect {
      border-radius: ${borderRadius};
    }

    background: ${primaryColor};
    background-image: linear-gradient(
      to right,
      ${primaryColor} 0%,
      ${secondaryColor} 20%,
      ${primaryColor} 50%,
      ${primaryColor} 100%
    );

    animation: ${animation(width)} ${duration} linear infinite forwards;
  `}

  background-repeat: no-repeat;
  background-size: 250% 250%;

  margin: ${({ margin }) => margin || 0};
  cursor: progress;
`;
