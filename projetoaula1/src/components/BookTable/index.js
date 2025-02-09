import styled from "styled-components"

const BookSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px; 
    cursor: pointer;
    p {
        width: 200px;
        color: #fff;
        text-align: center;
    }
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


function BookTable(props) {
    return (
        <main>
            {props.books.map((book) =>
                <BookSectionContainer key={book.id}>
                    <BookImage src={book.src} alt={book.title} />
                    <p>{book.nome}</p>
                </BookSectionContainer>
            )}
        </main>
    )
}

export default BookTable
