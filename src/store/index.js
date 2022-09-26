import {combineReducers, createStore, applyMiddleware} from 'redux';
import {tokenMiddleware, tokenReducer} from './tokenReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {authReducer} from './auth/authReducer';
import {postReducer} from './post/postReducer';
import {commentReducer} from './commentReducer';
import {commentDataReducer} from './commentData/commentDataReducer';


const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  post: postReducer,
  commentData: commentDataReducer,
});


export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
