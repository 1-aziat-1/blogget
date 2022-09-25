import {combineReducers, createStore, applyMiddleware} from 'redux';
import {commentReducer} from './commentReducer';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {authReducer} from './auth/authReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
