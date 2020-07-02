import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  padding: 48px 32px;
`;

export const Image = styled.img`
  min-width: 166px;
  margin-bottom: 48px;
`;

export const Title = styled.h2`
  font-family: Roboto Medium;
  font-size: 20px;
  line-height: 25px;
  color: #3b3b4d;
  margin-bottom: 20px;
  text-align: center;
`;

export const Description = styled.p`
  font: Regular 14px/20px Montserrat;
  font-family: Roboto regular;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.16px;
  color: #6c7b8a;
  opacity: 0.6;
  margin: 0;
  text-align: center;
`;
