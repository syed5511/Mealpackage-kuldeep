import styled from "styled-components";

export const UL = styled.ul`
  font: Bold 18px/24px Roboto;
  letter-spacing: 0px;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  height: 100%;
`;

export const LI = styled.li`
  cursor: pointer;
  margin: 0 8px;
  height: 100%;
  &.active {
    border-bottom: 1px solid #4477ff;
  }
`;

export const A = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  color: #e9e3c8;
  &:hover {
    color: #4477ff;
    text-decoration: none;
  }
`;
