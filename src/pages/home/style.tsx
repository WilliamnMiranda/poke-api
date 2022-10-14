import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px 0px;
    min-height: 100vh;
    background-color: rgb(6,11,40);
`
export const ContainerPokemons = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap:30px;
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    gap:20px;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.7em;
        margin-top: 20px;
        height: 40px;
    }
`