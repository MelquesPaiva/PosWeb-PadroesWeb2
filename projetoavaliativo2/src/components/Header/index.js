import styled from "styled-components"
import { Paragraph, Title } from "../TextData"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { userIsLogged } from "../../modules/userFunctions"

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
    { name: 'Home', redirectTo: '/' },
    { name: 'Login', redirectTo: '/login' },
    { name: 'Cadastre-se', redirectTo: '/register' },
];


const userLoggedOptions = [
    {
        name: "Usuário",
        redirectTo: "/user/home"
    },
    {
        name: "Pedido",
        redirectTo: "/user/request"
    },
];

export const Header = () => {
    const navigate = useNavigate()
    const [userIn, setUserIn] = useState(userIsLogged())
    const logout = () => {
        if (window.confirm('Deseja realmente realizar o logout')) {
            localStorage.removeItem("userLogged")
            navigate('/login')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setUserIn(userIsLogged());
          }, 1000);
        
          return () => clearInterval(interval);
    }, [])

    const logoutButton = () => {
        if (userIn) {
            return <MenuOption><a href="#" onClick={logout}>Logout</a></MenuOption>
        }
        return null
    }

    return (
        <HeaderElement>
            <Title color='#fff'>Menu Vital</Title>
            <Paragraph align='center' color='#fff'>Facilitando escolhas saudáveis para melhorar vidas</Paragraph>
            <Menu>
                {MenuOptions.concat((userIn ? userLoggedOptions : [])).map((option) => {
                    return <MenuOption><Link to={option.redirectTo}>{option.name}</Link></MenuOption>
                })}
                {logoutButton()}
            </Menu>
        </HeaderElement>
    )
}
