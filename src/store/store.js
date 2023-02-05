import { combineReducers, createStore } from 'redux';

import { stayReducer } from './stay.reducer.js';
import { userReducer } from './user.reducer.js';

const rootReducer = combineReducers({
    stayModule: stayReducer,
    userModule: userReducer,
})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)




