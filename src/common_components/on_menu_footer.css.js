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
  box-shadow: 0px 3px 6px #00000029;
  height: 68px;
  padding: 10px 0;

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
  height: 100%;
  background-color: #fff;
  padding: 0;
  position: relative;
`;

export const Icon = styled.img`
  max-height: 30px;
  &.big {
    max-height: inherit;
    height: 74px;
    z-index: 1;
    position: absolute;
    bottom: 12px;
  }
`;

export const A = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: #140f26;
  margin-top: 2px;
`;
