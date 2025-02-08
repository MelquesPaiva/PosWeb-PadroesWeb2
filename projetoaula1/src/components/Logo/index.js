import styled from 'styled-components'
import logo from './../../images/logo.svg'
import './style.css'

// styled components
const LogoContainer = styled.div`
display: flex;
font-size: 30px;
`
const LogoImage = styled.img`
margin-right: 10px;
`

const Logo = function () {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="logo" />
            <p><strong>Projeto</strong> Store</p>
        </LogoContainer>
    )
}

export default Logo
