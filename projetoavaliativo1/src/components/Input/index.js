import styled from "styled-components"

const InputElement = styled.input`
    border: 1px solid #dfdfdf;
    background: transparent;
    padding: 20px 140px;
    border-radius: 50px;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &:not([type="radio"]) {
        width: 200px;
    }

    &::placeholder {
        color: #a9a9a9;
        font-size: 16px;
    }
`

function Input ({type, name, placeholder}) {
    return (
        <InputElement type={type} name={name} placeholder={placeholder} />  
    );
}

export default Input
