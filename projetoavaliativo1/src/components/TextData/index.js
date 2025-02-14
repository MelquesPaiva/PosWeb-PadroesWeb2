import styled from "styled-components";

export const Title = styled.h2`
width: 100%;
padding: 15px 0 0 0;
color: ${props => props.color || '#000'};
font-size: ${props => props.fontSize || '36px'};
text-align: ${props => props.align || 'center'};
margin: 0;
`

export const Paragraph = styled.p`
text-align: justify;
font-weight: bold;
color: ${props => props.color || '#233142'};
`