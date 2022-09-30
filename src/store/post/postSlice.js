import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.posts = [];
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: {
    [postRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      state.posts = action.payload.posts;
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.loading = false;
      state.error = '';
    },
    [postRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
