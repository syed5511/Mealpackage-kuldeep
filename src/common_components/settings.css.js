import styled from "styled-components";

export const Container = styled.div``;

export const Top = styled.div``;

export const Links = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 8px;
`;

export const Link = styled.li`
  cursor: pointer;
  font-family: Roboto;
  font-size: 15px;
  color: #555;
  &:hover {
    color: #101010;
  }
`;

export const Logout = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #9b9b9b;
  &:hover {
    color: #101010;
  }
`;

export const HR = styled.hr`
  margin-top: 12px;
  margin-bottom: 12px;
  width: calc(100% + 32px);
  margin-left: -16px;
`;

export const Bottom = styled.div`
  font-size: 14px;
  color: #9b9b9b;
  span {
    font-weight: bold;
    color: #101010;
    margin-left: 24px;
  }
`;
