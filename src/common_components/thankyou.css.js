import styled from "styled-components";

import MButton from "./button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 780px) {
    padding: 0 32px 32px;
  }
`;

export const SubHeading = styled.div`
  color: #555555;
  font-size: 14px;
  @media (max-width: 780px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  font-family: Roboto Bold;
  color: #000000;
  margin-bottom: 32px;
  @media (max-width: 780px) {
    flex-direction: column;
    margin-top: 32px;
    text-align: center;
    font-family: Roboto Bold;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 48px;
  }
`;

export const Icon = styled.img`
  max-height: 40px;
  margin-right: 24px;
  @media (max-width: 780px) {
    max-height: 70px;
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

export const Button = styled(MButton)`
  display: inline-block;
  width: auto;
  padding: 8px 48px;
`;
