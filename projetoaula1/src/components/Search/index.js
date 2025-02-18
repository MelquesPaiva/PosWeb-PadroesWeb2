import styled from "styled-components"
import Input from "../Input"
import { useEffect, useState } from "react"
import BookTable from "../BookTable"
import { Title } from "../TextData"
import { getLivros } from "../../servicos/livros"
import { postFavorite } from "../../servicos/favorites"

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%,
    #326589);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Search = () => {
    const [searchedBooks, setSearchedBooks] = useState([])
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        const booksApiData = await getLivros()
        setBooks(booksApiData)
    };

    const searchBook = (searchText) => {
        if (searchText === '') {
            setSearchedBooks([])
            return
        }

        const searchResult = books.filter((book) => book.nome.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        setSearchedBooks(searchResult)
    }

    const addFavourite = async (id) => {
        if (window.confirm('Deseja adicionar o livro aos favoritos')) {
            const data = await postFavorite(id)
            alert(data)
        }
    }

    return (
        <SearchContainer>
            <Title cor="#FFF">Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu produto.</SubTitle>
            <Input placeholder="Digite Aqui" onChange={event => searchBook(event.target.value)}/>
            <BookTable books={searchedBooks} bookClick={addFavourite}></BookTable>
        </SearchContainer>
    )
}

export default Search
