import styled, { keyframes } from "styled-components";

const loading = keyframes`  
 0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: ${loading} 2s linear infinite;
`;
