import styled from "styled-components"

export const Container = styled.div`
    background-color: lightcoral;
    color: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.5em;
        font-weight: 300;
        text-align: center;
    }
`

export const InputsBloc = styled.div`
    display: flex;
    margin: 30px 0;
`

export const Input = styled.input`
    margin: 5px;
`

export const Button = styled.button`
    padding: 0 20px;
    border: none;
    background: white;
    font-family: inherit;
    &:hover {
        cursor: pointer;
        color: lightcoral;
        font-weight: bold;
    }

    @keyframes clic {
        to {
            background-color: lightcoral;
            opacity: 0;
        }
    }
`

export const TaskAdded = styled.div`
    transform: translateX(-200px);
    transform-origin: top;
    animation: scaleOn both 0.3s;
    @keyframes scaleOn {
        to {
            transform: translateX(0);
        }
    }
`