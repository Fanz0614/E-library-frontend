import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk'
//github->redux-devloptool-extension-Advanced store set up
//redux-thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;