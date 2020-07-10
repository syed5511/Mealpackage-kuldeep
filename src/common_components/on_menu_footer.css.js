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

  & > div {
    display: flex;
    flex-direction: column;
    flex: 0 0 33.33%;
    align-items: center;
    padding: 6px 0;
  }
`;

export const Cover = styled.div``;

export const MainMenu = styled.div`
  position: relative;
  min-height: 63px;
  background-color: #fff;
  padding: 0;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 124px;
    border-radius: 50%;
    bottom: -25px;
    z-index: -1;
    border: 1px solid #e1e1e1;
    background: #fff;
  }
`;

export const Icon = styled.img`
  max-height: 32px;
  &.big {
    max-height: 63px;
    position: absolute;
    bottom: 16px;
    z-index: 1;
  }
`;

export const A = styled.a`
  font-size: 14px;
  line-height: 19px;
  color: #140f26;
`;
