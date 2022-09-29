import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  post: {},
  comments: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    commentsRequest: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    commentsRequestSuccess: (state, action) => {
      state.status = 'loaded';
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
    },
    commentsRequestError: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});


export default commentsSlice.reducer;
