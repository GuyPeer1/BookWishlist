import BookListPreview from "./book-list-preview.jsx"

export function BookList({ books }) {

    if (!books) return 'Loading....'

    return <section className="book-list">
        {books.map((book, index) => {
            if (book.inWishList) return <BookListPreview key={index} book={book} />
        })}
    </section>
}