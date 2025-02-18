import { useEffect, useState } from "react"
import BookTable from "../BookTable"
import { deleteFavorite, getFavorites } from "../../servicos/favorites"
import { Title } from "../TextData"
import styled from "styled-components"

const FavoriteListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const FavoritesList = () => {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        fetchFavorites()
    }, [])

    const fetchFavorites = async () => {
        const favoritesList = await getFavorites()
        setFavorites(favoritesList)
    }

    const removeFavorite = async function (id) {
        if (window.confirm('Deseja remover dos seus favoritos?')) {
            const message = await deleteFavorite(id)
            alert(message)
            fetchFavorites()
        }
    }

    return (
        <FavoriteListContainer>
            <Title>Aqui estão seus livros favoritos:</Title>
            <BookTable books={favorites} bookClick={removeFavorite}/>
        </FavoriteListContainer>
    )
}

export {
    FavoritesList
}
