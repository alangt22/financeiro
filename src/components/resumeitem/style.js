import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 15px;
    width: 30%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 1);

    @media (max-width: 750px) {
        width: 50%;
    
        p {
            font-size: 12px;
        }
        span {
            font-size: 20px;
        }
        svg {
            display: none;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px auto;

    svg{
        width: 25px;
        heigth: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weigth: bold;
`;