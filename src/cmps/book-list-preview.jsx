export default function BookListPreview({ book }) {

    return <section className="book-list-preview">
        <span className="list-title">{book.title}</span>
        <button className="nice-btn"> X</button>
    </section>
}