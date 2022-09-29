import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.token.token);
  const post = useSelector(state => state.comments.data);
  const comments = useSelector(state => state.comments.comment);
  const status = useSelector(state => state.comments.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [post, comments, status];
};
