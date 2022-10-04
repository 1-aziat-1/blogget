import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/post/postAction';

export const usePostsData = () => {
  const token = useSelector(state => state.token.token);
  const postsData = useSelector(state => state.post.posts);
  const loading = useSelector(state => state.post.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);
  return [postsData, loading];
};
