import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  @media (max-width: 1124px) {
    padding: 16px;
    border-top: 1px solid #e5e5e5;
  }
`;

export const Link = styled.a`
  letter-spacing: 0px;
  color: #fefefe;
  font-size: 20px;
  line-height: 26px;
  font-family: Roboto Medium;
  &.link {
    font-family: Roboto Bold;
    &:hover {
      color: #eeab5d;
      text-decoration: none;
    }
  }
  @media (max-width: 1124px) {
    &.link {
      color: #4575f6;
      font-size: 16px;
    }
  }
`;

export const Logo = styled.img`
  max-height: 24px;
  margin-right: 12px;
  &.loggedIn {
    max-height: 36px;
  }
  @media (max-width: 1124px) {
    display: none;
  }
`;

export const Cover = styled.div`
  display: flex;
  &.small {
    display: none;
  }
  @media (max-width: 1124px) {
    display: none;
    &.small {
      display: block;
    }
  }
`;
