import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
  font-family: Roboto Medium;
  color: rgba(229, 238, 228, 1);
  padding: 11px 12px;
  margin-bottom: 14px;
  &.blue {
    background-color: rgba(24, 20, 54, 1);
    border: 1px solid rgba(24, 20, 54, 1);
  }
`;
