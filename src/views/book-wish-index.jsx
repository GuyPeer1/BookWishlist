import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BookPreview } from '../cmps/book-preview.jsx';
import { BookStatus } from '../cmps/book-status.jsx';
import { loadBooks } from '../store/book.action.js';


export function BookWishIndex() {
    const books = useSelector(storeState => storeState.bookModule.books)
    const [currBook, setCurrBook] = useState(null)

    useEffect(() => {
        onLoadBooks()
    }, [])

    async function onLoadBooks() {
        try {
            const booksToSave = await loadBooks()
            setCurrBook(booksToSave[0])
        } catch (err) {
            console.log(err)
        }
    }

    function onChangeBook(diff) {
        let index = books.findIndex(book => book._id === currBook._id)
        index += diff
        if (index === -1) index = 0
        if (index >= books.length - 1) index = books.length - 1
        setCurrBook(books[index])
    }

    if (!books.length) return <h2>loading....</h2>
    if (!currBook) return <h2>loading....</h2>

    return (
        <section className="book-wish-index">
            <div className="book-preview-btns flex">
                <button onClick={() => onChangeBook(-1)} className="btn-scroll">{`<`}</button>
                <BookPreview currBook={currBook} />
                <button onClick={() => onChangeBook(+1)} className="btn-scroll">{`>`}</button>
            </div>
            <BookStatus books={books} />
        </section>
    )
}