import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 0;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  &.show {
    height: 100vh;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: #ebebeb33;
  background: transparent linear-gradient(182deg, #ebebeb33 0%, #000 100%);
  display: none;
  &.show {
    display: block;
  }
`;

export const Drawer = styled.div`
  min-height: 284px;
  position: fixed;
  width: 100%;
  bottom: -100%;
  left: 0;
  box-shadow: 0px 0px 5px #00000029;
  background-color: #fff;
  border-radius: 15px 15px 0px 0px;
  padding: 40px;
  z-index: 2;
  transition: 0.4s all ease-in-out;
  &.show {
    bottom: 68px;
  }
`;

export const Done = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 19px;
  font-family: Roboto Bold;
  position: absolute;
  top: -30px;
  right: 16px;
  z-index: 1;
`;
