import styled from "styled-components";

export const Container = styled.header`
  height: 94px;
  background: #181436 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 6px #11058029;
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
`;

export const Description = styled.div`
  font: Regular 14px/20px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
`;

export const Place = styled.div`
  font: Bold 15px/20px Roboto;
  letter-spacing: 0px;
  color: #eeab5d;
`;
