import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e1dede;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  background-color: #fff;
  @media (max-width: 780px) {
    min-width: auto;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  height: 241px;
`;

export const Footer = styled.div`
  border-top: 1px solid #ececec;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Body = styled.div`
  width: 100%;
`;

export const ItemName = styled.h3`
  font-size: 12px;
  line-height: 16px;
  font-family: Roboto Bold;
  color: #62637a;
  margin: 0;
`;

export const ItemDescription = styled.p`
  color: #62637a;
  font-size: 12px;
  line-height: 16px;
  margin: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #e1dede;
  margin-right: 8px;
`;

export const AddAction = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  color: #fff;
  background: #4477ff;
  box-shadow: 0px 8px 20px #000000b3;
  position: absolute;
  top: -16px;
  right: 8px;
  z-index: 1;
  &:active {
    box-shadow: 0px 4px 12px #000000b3;
  }
`;
