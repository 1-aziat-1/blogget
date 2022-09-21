import {useState} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.token);
  const [post, setPost] = useState({});
  const [commentsData, setCommentsData] = useState({});

  fetch(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 401) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(
      ([
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
      ]) => {
        const commentsData = children.map(item => item.data);
        setPost(post);
        setCommentsData(commentsData);
      },
    )
    .catch((err) => {
      console.error(err);
    });

  return [post, commentsData];
};
