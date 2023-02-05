
export const SET_BOOKS = 'SET_STAYS'
export const REMOVE_BOOK = 'REMOVE_STAY'
export const ADD_BOOK = 'ADD_STAY'
export const SET_FILTER = 'SET_FILTER'

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
            books = state.books.filter(stay => stay._id !== action.stayId)
            newState = { ...state, books, books }
            break
        case ADD_BOOK:
            newState = { ...state, stays: [...state.books, action.book] }
            break
        case SET_FILTER:
            return { ...state, filterBy: action.filterBy }
        default:
    }
    return newState
}
