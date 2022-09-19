import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePostsData = () => {
  const {token} = useContext(tokenContext);
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
