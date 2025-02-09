import styled from "styled-components";

export const Title = styled.h2`
width: 100%;
padding: 30px 0;
color: ${props => props.cor || '#EB9B00'};
font-size: ${props => props.fontSize || '36px'};
text-align: ${props => props.align || 'center'};
margin: 0;
`