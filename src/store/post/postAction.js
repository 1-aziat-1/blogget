/* eslint-disable max-len */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

// export const postRequestAsync2 = (newPage) => (dispatch, getState) => {
//   let page = getState().post.page;

//   if (newPage) {
//     page = newPage;
//     dispatch(postSlice.actions.changePage({page}));
//   }

//   const token = getState().token.token;
//   const after = getState().post.after;
//   const loading = getState().post.loading;
//   const isLast = getState().post.isLast;

//   if (!token || loading || isLast) return;
//   dispatch(postSlice.actions.postRequest());

//   axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(({data}) => {
//       console.log(data.data);
//       if (after) {
//         dispatch(postSlice.actions.postRequestSuccessAfter({posts: data.data.children, after: data.data.after}));
//       } else {
//         dispatch(postSlice.actions.postRequestSuccess({posts: data.data.children, after: data.data.after}));
//       }
//     })
//     .catch((error) => {
//       dispatch(postSlice.actions.postRequestError({error}));
//     });
// };

export const postRequestAsync = createAsyncThunk(
  'post/fetch',
  (newPage, {getState}) => {
    let page = getState().post.page;
    if (newPage) {
      page = newPage;
    }

    const token = getState().token.token;
    const after = getState().post.after;
    const isLast = getState().post.isLast;

    if (!token || isLast) return;

    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        let postData = data.data.children;
        if (after) {
          postData = [...getState().post.posts, ...data.data.children];
        }
        return {posts: postData, after: data.data.after};
      })
      .catch((error) => ({error: error.toString()}));
  }
);
