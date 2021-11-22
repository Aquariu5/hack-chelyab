import {combineReducers, createStore} from 'redux';
import {displayReducer} from './reducers/displayReducer.js';
import {pageReducer} from './reducers/pageReducer.js';
import { authReducer } from './reducers/authReducer.js';
const rootReducer = combineReducers( {
    displayReducer,
    pageReducer,
    authReducer
})

export const store = createStore(rootReducer); 