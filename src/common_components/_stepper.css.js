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
  font-size: 12px;
  border-radius: 50%;
  color: #181436;
  background: #d9e0f5 0% 0% no-repeat padding-box;
  cursor: no-drop;
  &.stepCompleted {
    cursor: pointer;
  }
  &.completed {
    background: #4477ff 0% 0% no-repeat padding-box;
    color: #fff;
  }
`;

export const Title = styled.div`
  font: bold 13px Roboto;
  color: #d9e0f5;
  padding: 0 12px;
  cursor: no-drop;
  &.stepCompleted {
    cursor: pointer;
  }
  &.completed {
    color: #4477ff;
  }
`;

export const Line = styled.div`
  margin-right: 12px;
  width: 48px;
  border-bottom: 2px solid #d9e0f5;
  cursor: no-drop;
  &.stepCompleted {
    cursor: auto;
  }
  &.completed {
    border-bottom: 2px solid #4477ff;
  }
`;
