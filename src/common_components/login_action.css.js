import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  font: bold 20px/26px Roboto;
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
  max-height: 42px;
  margin-right: 12px;
`;
