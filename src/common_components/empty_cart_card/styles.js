import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7fc;
  border: 1px solid #ececec;
  border-radius: 16px;
  padding: 71px 55px;
  margin: 8px;
`;

export const Image = styled.img`
  height: 178px;
`;

export const Title = styled.h3`
  font-size: 14px;
  line-height: 18px;
  font-family: Roboto Medium;
  color: #181436;
  margin-top: 24px;
  margin-bottom: 28px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-family: Roboto Medium;
  color: #c5c3c3;
  margin: 0;
`;
