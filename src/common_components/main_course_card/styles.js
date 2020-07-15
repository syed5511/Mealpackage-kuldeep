import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e1dede;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 8px;
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
  background: #ececec33;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  width: calc(100% - 32px);
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
  &:active {
    box-shadow: 0px 4px 12px #000000b3;
  }
`;
