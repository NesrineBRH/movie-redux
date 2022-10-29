import {createStore} from 'redux';
import combineReducers from '../reducer/index';

const initialState ={};
const compose = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_();
const store =createStore(combineReducers,initialState,compose);
export default store;