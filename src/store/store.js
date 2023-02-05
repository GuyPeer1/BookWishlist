import { combineReducers, createStore } from 'redux';

import { bookReducer } from './book.reducer.js';
import { userReducer } from './user.reducer.js';

const rootReducer = combineReducers({
    bookModule: bookReducer,
    userModule: userReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)




