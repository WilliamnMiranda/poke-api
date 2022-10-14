import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 700px;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const FilterInput = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  input {
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    width: 600px;
    height: 40px;
    color: white;
    font-size: 1.2em;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    width: 95px;
    background-color: #1ed4c4;
    @media (max-width: 800px) {
      width: 100%;
      height: 30px;
    }
  }
`;
export const FilterType = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
