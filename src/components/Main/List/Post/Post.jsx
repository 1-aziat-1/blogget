import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Rating from './Rating';
import Delete from './Delete';
import Time from './Time';
import LogoImg from './LogoImg';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;

  return (
    <li className={style.post}>
      <LogoImg title={title}/>
      <Logo title={title} author={author}/>
      <Delete />
      <Rating ups={ups}/>
      <Time date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
