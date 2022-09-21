import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {URL_API} from '../api/const';

export const usePostsData = () => {
  const token = useSelector(state => state.token);
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({data}) => {
        setPostsData(data.children);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return [postsData];
};
