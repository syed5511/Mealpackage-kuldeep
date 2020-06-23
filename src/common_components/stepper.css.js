import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Step = styled.div`
  display: flex;
  align-items: center;
`;

export const Count = styled.div`
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-size: 14px;
  line-height: 20px;
  font-family: Roboto Medium;
  border-radius: 50%;
  color: #4477ff;
  background: #ffffff 0% 0%;
  cursor: no-drop;
  &.stepCompleted {
    cursor: pointer;
  }
  &.mobile {
    width: 20px;
    height: 20px;
  }
  &.completed {
    background: #4477ff 0% 0%;
    color: #fff;
  }
`;

export const Title = styled.div`
  color: #ffffff;
  padding: 0 12px;
  cursor: no-drop;
  font-size: 16px;
  line-height: 20px;
  font-family: Roboto Bold;
  &.stepCompleted {
    cursor: pointer;
  }
  &.completed {
    color: #4477ff;
  }
  &.mobile {
    padding: 0 8px;
  }
`;

export const Line = styled.div`
  margin-right: 12px;
  width: 48px;
  border-bottom: 2px solid #ffffff;
  cursor: no-drop;
  &.stepCompleted {
    cursor: auto;
  }
  &.completed {
    border-bottom: 2px solid #4477ff;
  }
  &.mobile {
    margin-right: 0;
    width: 24px;
  }
`;
