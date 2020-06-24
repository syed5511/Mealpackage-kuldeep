import styled from "styled-components";

export const Container = styled.header`
  height: 72px;
  background: #181436 0% 0% no-repeat padding-box;
  padding: 0 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1124px) and (max-width: 1248px) {
    padding: 0 72px;
  }
  @media (max-width: 1124px) {
    padding: 0 32px;
  }
`;

export const Logo = styled.img`
  max-height: 42px;
`;

export const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 1124px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Middle = styled.div`
  height: 100%;
  margin-left: 80px;
  display: flex;
  @media (max-width: 1124px) {
    display: none;
  }
`;

export const Right = styled(Left)`
  @media (max-width: 1124px) {
    display: none;
  }
  & > div {
    height: 100%;
  }
`;

export const Hamburg = styled.div`
  display: none;
  width: 30px;
  @media (max-width: 1124px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &:hover div {
      border-top: 1px solid #eeab5d;
    }
  }
`;

export const Line = styled.div`
  border-top: 1px solid #fff;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const MobileNav = styled.div`
  position: fixed;
  right: -280px;
  top: 0;
  z-index: 1;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  &.show {
    right: -1px;
  }
  width: 100%;
  height: 100vh;
  max-width: 280px;
  padding: 40px 0;
  transition: 0.4s all ease-in-out;
`;

export const LoggedInUser = styled.div`
  font-size: 18px;
  font-family: Roboto Bold;
  margin-bottom: 12px;
  border-bottom: 1px solid #e5e5e5;
  padding: 8px 8px 8px 40px;
`;

export const Close = styled.img`
  max-height: 32px;
  top: 8px;
  right: 8px;
  z-index: 1;
  position: absolute;
  cursor: pointer;
`;
