import {useState} from 'react';
import {URL_API} from '../api/const';
import {useToken} from './useToken';

export const useCommentsData = (id) => {
  const [token] = useToken('');
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
