import styled from "styled-components"

const PresentationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const UserPresentation = () => {
    const userLogged = localStorage.getItem('userLogged')
    const userData = JSON.parse(userLogged)

    return (
        <PresentationContainer>
            <h2>Seja bem vindo {userData.name}</h2>
            <p>Contamos como você para nos ajudar a criar um ecossistema de alimentação saudável na internet.</p>
        </PresentationContainer>
    );
}
