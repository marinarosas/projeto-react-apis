import styled from "styled-components";
import pokebola from '../../assets/pokebolaFundoCinza.png'

export const ContainerDetails = styled.div`
    border: 2px solid red;
    background-image: url(${pokebola}); 
    background-repeat: no-repeat;
    background-size: 78%; 
    background-color: #5E5E5E;
    background-position: 5vw 0;
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    font-weight: 700;
    min-height: 120vh;
    gap: 7vh;

    h1{
        font-size: 48px;
        margin-left: 2vw;
        margin-top: 2vh;
        z-index: 1;
    }
`

export const Circle = styled.div`
        background-color: rgba(102, 102, 102, 90%);
        border-radius: 50%;
        width: 50vw;
        height: 100vh;
        position: absolute;
        z-index: 0;
        left: 300px;
        bottom: 200px;
        z-index: 0;
    `