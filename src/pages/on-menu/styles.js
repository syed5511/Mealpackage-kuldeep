import styled from "styled-components";

export const Container = styled.div`
  + div.followus_container {
    margin-top: 0;
  }
  @media (max-width: 780px) {
    padding-bottom: 68px;
    + div.footer_terms {
      display: none;
    }
  }
`;

export const Body = styled.div`
  padding: 0 142px;
  display: flex;
  &.dessert {
    background-color: #f7f7fc;
    flex-direction: column;
    padding-bottom: 100px;
  }
  @media (max-width: 780px) {
    padding: 0 16px 16px;
    &.dessert {
      padding: 16px;
    }
  }
`;

export const CartContainer = styled.div`
  width: 25%;
`;

export const SectionTitle = styled.h2`
  font-family: Roboto BoldItalic;
  font-size: 18px;
  line-height: 22px;
  color: #181436;
  padding: 24px 166px 16px;
  margin: 0;
  &.dessert {
    padding: 24px 24px 16px;
  }
  @media (max-width: 780px) {
    padding: 16px 16px 8px;
    &.dessert {
      padding: 16px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 75%;
  align-self: flex-start;
  flex-wrap: wrap;
  & > div {
    flex-basis: calc(33.33% - 16px);
  }
  &.dessert {
    & > div {
      flex-basis: calc(25% - 16px);
    }
  }
  @media (max-width: 780px) {
    flex-direction: column;
    width: 100%;
    & > div {
      flex-basis: 100%;
    }
    &.dessert {
      flex-direction: row;
      & > div {
        flex-basis: calc(50% - 0px);
      }
    }
  }
`;

export const UpperContent = styled.div`
  border-bottom: 1px solid #e1dede;
  background-color: #f7f7fc;
  padding: 14px 142px;
  display: flex;
  align-items: center;
  @media (max-width: 780px) {
    padding: 16px;
  }
`;

export const ExpectedTime = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  background-color: #000;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DeliveryInfo = styled.div`
  color: #181436;
  font-size: 12px;
  line-height: 16px;
  font-family: Roboto Medium;
`;

export const Time = styled(DeliveryInfo)``;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8a648d9;
  border-radius: 5px;
  padding: 16px;
  margin-left: 24px;
  justify-content: center;
  flex: 1;
`;

export const AlertIcon = styled.img`
  max-height: 17px;
  margin-right: 8px;
`;

export const AlertContent = styled.div`
  color: #2b2a2d;
  font-size: 12px;
  line-height: 16px;
  font-family: Roboto Medium;
`;

export const DrawerImage = styled.img`
  height: 178px;
  width: 178px;
`;

export const DrawerDescription = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-family: Roboto Medium;
  color: #373333;
  margin: 0;
  margin-top: 24px;
`;

export const DrawerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
