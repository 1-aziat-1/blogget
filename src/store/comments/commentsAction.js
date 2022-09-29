import axios from 'axios';
import {URL_API} from '../../api/const';
import {commentsSlice} from './commentsSlice';

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;
  dispatch(commentsSlice.actions.commentsRequest());
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
        const comments = children.map(item => item.data);
        dispatch(
          commentsSlice.actions.commentsRequestSuccess({post, comments}),
        );
      },
    )
    .catch((error) => {
      dispatch(commentsSlice.actions.commentsRequestError({error}));
    });
};
