import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin: 0 auto;
    width: 90%;
    min-height: 87vh;
    padding-bottom: 90px;
    Form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
    .inputs {
        display: flex;
        flex-direction: column;
        width: 60%;
        align-items: center;
        gap: 1rem;
    }
    .small-inputs {
        display: flex;
        gap: 2rem;
        width: 100%;
    }
    .custom-input {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        width: 100%;
        label {
            font-size: 2rem;
            color: #333333;
        }
        input {
            height: 2.5rem;
            font-size: 1.2rem;
            border: 0.1px darkgray solid;
            border-radius: 0.5rem;
            padding-left: 0.5rem;
        }
        .input-error {
            border: 0.1rem red solid;
            border-radius: 0.6rem;
        }
        .error {
            font-size: 1rem;
            color: red;
        }
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .back-button {
        height: 3rem;
        width: 8rem;
        background: none;
        color: #424242;      
        border: 0.0625rem solid #424242;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem; 
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer; 
    }
    .continue-button {
        height: 3rem;
        width: 8rem;
        border-radius: 0.75rem; 
        background: #424242;
        color: white;
        font-weight: 600;
        font-size: 1rem;
        border: none;
        cursor: pointer; 
    }
    button:disabled {
        opacity: 35%;
    }
`

export const CheckoutTitle = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: #333333;
`