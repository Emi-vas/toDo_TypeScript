import styled from "styled-components"

export const Card = styled.div`
    border: 3px solid lightcoral ;
    width: 700px;
    
    overflow: hidden;
    border-radius: 50px;
    background: #ffebe4;
    margin-top: 20px;

    display: flex;
    justify-content: space-between;

    p{
        color: #663229;
        font-weight: bold;
        padding: 20px;
    }

    button {
        padding: 20px 30px;
        border: none;
        background-color: lightcoral;
        color: white;
        &:hover {
            cursor: pointer;
        }
    }
`