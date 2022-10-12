import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({color})=> color};
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 0.9em;
    font-family: 'Roboto', sans-serif;
    gap:5px;
    cursor: pointer;
`