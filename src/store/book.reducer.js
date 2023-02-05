
export const SET_BOOKS = 'SET_STAYS'
export const REMOVE_BOOK = 'REMOVE_STAY'
export const ADD_BOOK = 'ADD_STAY'
export const UPDATE_BOOK = 'UPDATE_BOOK'

const initialState = {
    books: [],
}

export function bookReducer(state = initialState, action) {
    let newState = state
    let books
    switch (action.type) {
        case SET_BOOKS:
            newState = { ...state, books: action.books }
            break
        case REMOVE_BOOK:
            books = state.books.filter(book => book._id !== action.bookId)
            newState = { ...state, books, books }
            break
        case ADD_BOOK:
            newState = { ...state, stays: [...state.books, action.book] }
            break
        case UPDATE_BOOK:
            books = state.books.map(book => book._id === action.book._id ? action.book : book)
            return { ...state, books }
        default:
    }
    return newState
}
