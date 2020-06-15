import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 14px;
  color: rgba(229, 238, 228, 1);
  padding: 12px;
  margin: 12px 0;
  &.blue {
    background-color: rgba(24, 20, 54, 1);
    border: 1px solid rgba(24, 20, 54, 1);
  }
`;
