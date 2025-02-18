import styled from "styled-components"
import livro from "./../../images/livro.png"

const BookMain = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const BookSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const BookImage = styled.img`
    width: 100px;
`

const BookName = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 300px;
    padding-top: 35px;
`


function BookTable({books, bookClick}) {
    return (
        <BookMain>
            {books.map((book) =>
                <BookSectionContainer key={book.id} onClick={() => bookClick(book.id)}>
                    <BookImage src={livro} alt={book.title} />
                    <BookName>{book.nome}</BookName>
                </BookSectionContainer>
            )}
        </BookMain>
    )
}

export default BookTable
