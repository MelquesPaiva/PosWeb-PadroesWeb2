import styled from "styled-components"
import { latestReleases } from "../../data/latestReleases"
import { Title } from "../TextData"

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooks = styled.section`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title>Últimos Lançamentos</Title>
            <NewBooks>
            { latestReleases.map((livro) => <img src={livro.src} alt={livro.nome}></img>) }
            </NewBooks>
        </LatestReleasesContainer>
    )
}

export default LatestReleases
