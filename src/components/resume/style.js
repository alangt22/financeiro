import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    margin-top: -50px;
    justify-content: space-around;

    

    @media (max-width: 750px){
        align-items: center;
        display:flex;
        flex-direction: column;
    }

`;

