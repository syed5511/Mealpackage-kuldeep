import styled from "styled-components";

export const UL = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  height: 100%;
  margin-right: 80px;
  @media (max-width: 1124px) {
    margin-right: 0;
    flex-direction: column;
    height: auto;
  }
`;

export const LI = styled.li`
  cursor: pointer;
  margin: 0 8px;
  height: 100%;
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid #eeab5d;
  }
  @media (max-width: 1124px) {
    border-bottom: none;
    margin: 0;
    margin-bottom: 8px;
    &.active {
      border-bottom: none;
      a {
        color: #eeab5d;
      }
    }
  }
`;

export const A = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  color: #e9e3c8;
  font-size: 14px;
  line-height: 24px;
  font-family: Roboto Bold;
  &:hover {
    color: #eeab5d;
    text-decoration: none;
  }
  @media (max-width: 1124px) {
    padding: 0 16px;
    font-size: 16px;
    color: #555;
  }
`;
