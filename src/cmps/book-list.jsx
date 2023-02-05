import BookListPreview from "./book-list-preview.jsx"

export function BookList({ books }) {

    function ToggleWishList(book) {
        const book = structuredClone(order)
        const { startDate, endDate } = range.range1
        orderToSave.startDate = startDate
        orderToSave.endDate = endDate
        updateOrder(orderToSave)
    }

    if (!books) return 'Loading....'

    return <section className="book-list">
        {books.map((book, index) => {
            if (book.inWishList) return <BookListPreview key={index} book={book} />
        })}
    </section>
}