import styled from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { books } from "../../data/searchData"
import BookTable from "../BookTable"
import { Title } from "../TextData"

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
    const [searchedBooks, setSearchedBooks] = useState(books)
    
    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu produto.</SubTitle>
            <Input placeholder="Digite Aqui" onChange={ (event) => {
                const searchText = event.target.value
                const searchResult = books.filter((book) => book.nome.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                setSearchedBooks(searchResult)
            } }/>
            <BookTable books={searchedBooks}></BookTable>
        </SearchContainer>
    )
}

export default Search
