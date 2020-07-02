import styled, { keyframes } from "styled-components";
import RbButton from "react-bootstrap/Button";

const animation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Button = styled(RbButton)`
  width: 100%;
  height: 53px;
  background: #5c83ee 0% 0% no-repeat padding-box;
  box-shadow: 0 17px 10px -10px #c2cff3;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ disabled }) =>
    disabled
      ? `
    cursor: no-drop;
  `
      : ""}
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  margin-left: 8px;
  border-top: 4px solid #3498db;
  width: 28px;
  height: 28px;
  animation: ${animation} 1.5s linear infinite;
`;
