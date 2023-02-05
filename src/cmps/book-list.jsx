import { bookService } from "../services/book-service.js"
import BookListPreview from "./book-list-preview.jsx"

export function BookList({ books }) {

    if (!books) return 'Loading....'
    const sum = bookService.sumCost(books)

    return <section className="book-list">
        {books.map((book, index) => {
            if (book.inWishList) return <BookListPreview key={index} book={book} />
        })}
        <span className="total">Total: $ {sum} </span>
    </section>
}