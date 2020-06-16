import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

export const Link = styled.a`
  font: bold 16px Roboto;
  letter-spacing: 0px;
  color: #fefefe;
  &.link {
    &:hover {
      color: #4477ff;
      text-decoration: none;
    }
  }
`;

export const Logo = styled.img`
  max-height: 24px;
  margin-right: 12px;
  &.loggedIn {
    max-height: 36px;
  }
`;
