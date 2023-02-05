import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BookPreview } from '../cmps/book-preview.jsx';
import { BookStatus } from '../cmps/book-status.jsx';
import { loadBooks } from '../store/book.action.js';


export function BookWishIndex() {
    const books = useSelector(storeState => storeState.bookModule.books)
    useEffect(() => {
        loadBooks()
    }, [])
    console.log(books)
    return (
        <section className="book-wish-index">
            <BookPreview books={books} />
            <BookStatus />
        </section>
    )
}