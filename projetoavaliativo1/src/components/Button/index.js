import styled from "styled-components";

export const Button = styled.button`
padding: 0.5rem;
font-size: 16px;
border: 1px solid #FFF;
border-radius: 10px;
width: 100%;
font-weight: 700;
cursor: pointer;
color: #FFF;
background-color: ${props => props.bgColor || '#FF0'}
`