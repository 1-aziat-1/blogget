import {combineReducers, createStore, applyMiddleware} from 'redux';
import {commentReducer} from './commentReducer';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  post: postReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
