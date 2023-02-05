import { bookService } from "../services/book-service";

export default function BookListPreview({ book }) {

    return <section className="book-list-preview">
        <span className="list-title">{book.title}</span>
        <button onClick={() => bookService.onToggleWishList(book)} className="nice-btn">X</button>
    </section>
}