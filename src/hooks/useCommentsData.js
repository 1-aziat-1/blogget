import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  commentDataRequestAsync,
} from '../store/commentData/commentDataAction';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  const post = useSelector(state => state.commentData.data);
  const commentsData = useSelector(state => state.commentData.comment);
  const status = useSelector(state => state.commentData.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentDataRequestAsync(id));
  }, [token]);

  return [post, commentsData, status];
};
