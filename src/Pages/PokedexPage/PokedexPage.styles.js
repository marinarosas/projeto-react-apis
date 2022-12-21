import styled from "styled-components";

export const ContainerPokedex = styled.main`
    background-color: #5E5E5E;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    font-weight: 700;
    min-height: 82vh;

    h1{
        font-size: 48px;
        margin-left: 2vw;
        margin-top: 2vh;
    }
`
 export const PokedexMain = styled.div`
    border: 2px solid greenyellow;
    display: flex;
    row-gap: 53px;
    flex-wrap: wrap;
    margin: 0px 40px;
    margin-top: 6vh;
    min-height: 60vh
 `