import { bookService } from '../services/book-service';
import { SET_BOOKS, REMOVE_BOOK, ADD_BOOK, UPDATE_BOOK } from './book.reducer.js';
import { store } from './store.js';


export async function loadBooks() {
    try {
        const books = await bookService.query()
        store.dispatch({
            type: SET_BOOKS,
            books
        })

    } catch (err) {
        throw err
    }
}


export async function updateBook(book) {
    try {
        const savedBook = await bookService.save(book)
        store.dispatch({type: UPDATE_BOOK, savedBook})
        return savedBook
    } catch (err) { console.log(err); throw err }
}

