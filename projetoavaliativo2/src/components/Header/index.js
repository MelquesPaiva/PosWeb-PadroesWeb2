import styled from "styled-components"
import { Paragraph, Title } from "../TextData"
import { Link } from "react-router-dom"

const HeaderElement = styled.header`
background-color: rgb(240 25 69);
padding: 1rem 0 0 0;
`

const Menu = styled.ul`
display: flex;
align-items: center;
padding: 1.5rem 0;
background-color: #fff;
`

const MenuOption = styled.li`
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
min-width: 120px;
`

const MenuOptions = [
    {name: 'Home', redirectTo: '/'},
    {name: 'Login', redirectTo: '/login'},
    {name: 'Cadastre-se', redirectTo: '/register'},
];

export const Header = () => {
    return (
        <HeaderElement>
            <Title color='#fff'>Menu Vital</Title>
            <Paragraph align='center' color='#fff'>Facilitando escolhas saudáveis para melhorar vidas</Paragraph>
            <Menu>
                {MenuOptions.map((option) => <MenuOption><Link to={option.redirectTo}>{option.name}</Link></MenuOption>)}
            </Menu>
        </HeaderElement>
    )
}
