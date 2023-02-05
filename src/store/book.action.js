import { bookService } from '../services/book-service';
import { SET_BOOKS, REMOVE_BOOK, ADD_BOOK, UPDATE_BOOK, SET_SORT } from './book.reducer.js';
import { store } from './store.js';


export async function loadBooks(sortBy) {
    try {
        const books = await bookService.query(sortBy)
        store.dispatch({
            type: SET_BOOKS,
            books
        })
        return books
    } catch (err) {
        throw err
    }
}


export async function updateBook(book) {
    try {
        const savedBook = await bookService.save(book)
        store.dispatch({ type: UPDATE_BOOK, book })
        return savedBook
    } catch (err) { console.log(err); throw err }
}

export function onSetSort(sortBy) {
    return store.dispatch({ type: SET_SORT, sortBy })
}