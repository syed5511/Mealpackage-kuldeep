import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 1;
  left: 0;
  background-color: #fff;
  align-items: center;
  border-top: 1px solid #e1e1e8;
  height: 48px;

  & > div {
    display: flex;
    flex-direction: column;
    flex: 0 0 33.33%;
    align-items: center;
  }
`;

export const Cover = styled.div``;

export const MainMenu = styled.div`
  position: relative;
  min-height: 48px;
  background-color: #fff;
  padding: 0;
  position: relative;
`;

export const Icon = styled.img`
  max-height: 20px;
  &.big {
    max-height: 55px;
    z-index: 1;
    position: absolute;
    bottom: 2px;
  }
`;

export const A = styled.a`
  font-size: 10px;
  line-height: 14px;
  color: #140f26;
`;

export const RoundedShape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: -28px;
  left: 0;
  @media (min-width: 780px) {
    top: -25px;
  }
  svg {
    width: 100%;
    fill: #fff;
    stroke: #e7e7e7;
    stroke-width: 0.5px;
  }
`;
