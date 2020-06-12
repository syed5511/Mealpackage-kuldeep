import styled from "styled-components";

export const Container = styled.header`
  height: 72px;
  background: #181436 0% 0% no-repeat padding-box;
  padding: 0 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-height: 42px;
`;

export const Left = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const Middle = styled.div`
  height: 100%;
  margin-left: 80px;
  display: flex;
`;

export const Location = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 80px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  font: bold 14px Roboto;
  letter-spacing: 0px;
`;

export const Icon = styled.img`
  max-height: 28px;
`;

export const Description = styled.div`
  color: #ffffff;
`;

export const Place = styled.div`
  color: #eeab5d;
  margin-top: 2px;
`;
