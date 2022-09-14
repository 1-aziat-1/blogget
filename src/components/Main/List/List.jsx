import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbmail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 24,
      date: '2022-02-24T00:45:00.000Z',
    },
    {
      thumbmail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 24,
      date: '2022-02-24T00:45:00.000Z',
    },
    {
      thumbmail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 24,
      date: '2022-02-24T00:45:00.000Z',
    },
    {
      thumbmail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 24,
      date: '2022-02-24T00:45:00.000Z',
    }
  ];
  return (
    <ul className={style.list}>
      {postsData.map((postData,index) => (<Post key={index} postData={postData}/>))}
    </ul>
  );
};
