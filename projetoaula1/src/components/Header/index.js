import './style.css'
import Logo from "../Logo";
import Menu from "../Menu";
import MenuIcons from "../MenuIcons";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header `
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <Menu />
            <MenuIcons />
        </HeaderContainer>
    )
}

export default Header
