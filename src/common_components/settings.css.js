import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 1124px) {
    padding: 16px;
    border-top: 1px solid #e5e5e5;
  }
`;

export const Top = styled.div``;

export const Links = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 8px;
`;

export const Link = styled.li`
  cursor: pointer;
  font-family: Roboto Regular;
  font-size: 15px;
  color: #555;
  &:hover {
    color: #101010;
  }
  @media (max-width: 1124px) {
    font-size: 16px;
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
  @media (max-width: 1124px) {
    font-size: 16px;
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
    font-family: Roboto Bold;
    color: #101010;
    margin-left: 24px;
  }
  @media (max-width: 1124px) {
    font-size: 16px;
  }
`;
