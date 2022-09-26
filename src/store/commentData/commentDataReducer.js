import {
  COMMENTDATA_REQUEST,
  COMMENTDATA_REQUEST_ERROR,
  COMMENTDATA_REQUEST_SUCCESS
} from './commentDataAction';


const initialState = {
  status: '',
  data: {},
  comment: [],
  error: ''
};

export const commentDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTDATA_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };

    case COMMENTDATA_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        data: action.data,
        comment: action.comment,
        error: '',
      };

    case COMMENTDATA_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
