import styled from "styled-components"
import { Login } from "../components/Login";

const AppContainer = styled.div`
background-image: linear-gradient(90deg, #e0ebf3 35%, #ffffff);
padding: 1rem 0;
margin: 0 auto;
`

function LoginPage() {
    return (
        <AppContainer>
            <Login />
        </AppContainer>
    )
}

export default LoginPage;
