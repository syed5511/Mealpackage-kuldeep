import styled from "styled-components";

import MButton from "./button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubHeading = styled.div`
  color: #555555;
  font-size: 14px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const Icon = styled.img`
  max-height: 40px;
  margin-right: 24px;
`;

export const Button = styled(MButton)`
  display: inline-block;
  width: auto;
  padding: 8px 48px;
`;
