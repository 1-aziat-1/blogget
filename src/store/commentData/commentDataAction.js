import axios from 'axios';
import {URL_API} from '../../api/const';


export const COMMENTDATA_REQUEST = 'COMMENTDATA_REQUEST';
export const COMMENTDATA_REQUEST_SUCCESS = 'COMMENTDATA_REQUEST_SUCCESS';
export const COMMENTDATA_REQUEST_ERROR = 'COMMENDATAT_REQUEST_ERROR';

export const commentDataRequest = () => ({
  type: COMMENTDATA_REQUEST,
});

export const commentDataRequestSuccess = (data, comment) => ({
  type: COMMENTDATA_REQUEST_SUCCESS,
  data,
  comment,
});

export const commentDataRequestError = (error) => ({
  type: COMMENTDATA_REQUEST_ERROR,
  error,
});

export const commentDataRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(commentDataRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({data: [
        {
          data: {
            children: [{data: post}],
          },
        },
        {
          data: {
            children,
          },
        },
      ]}) => {
        const commentsData = children.map(item => item.data);
        dispatch(commentDataRequestSuccess(post, commentsData));
      },
    )
    .catch((err) => {
      console.error(err);
      dispatch(commentDataRequestError(err.message));
    });
};
