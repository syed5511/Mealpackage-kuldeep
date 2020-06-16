import styled from "styled-components";

export const Container = styled.header`
  height: 72px;
  background: #181436 0% 0% no-repeat padding-box;
  padding: 0 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) and (max-width: 1248px) {
    padding: 0 48px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
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

export const Right = styled(Left)`
  & > div {
    height: 100%;
  }
`;
