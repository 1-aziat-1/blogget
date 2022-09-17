import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {useToken} from './useToken';

export const useGetBest = () => {
  const [token] = useToken('');
  const [bestData, setBestData] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then((response) => response.json())
      .then(({data}) => {
        setBestData(data.children);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);
  return [bestData];
};
