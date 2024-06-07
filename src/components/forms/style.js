import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 570px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    cursor: pointer;
   
`;


export const Input = styled.input`
    outline: none;
    border-radius: 5px; 
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    

    input {
        cursor: pointer;
        margin-left: 20px;
        accent-color: red;
        margin-right: 5px;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 15px 10px;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: black;

    &:hover{
        background-color: green;
    }
`;
