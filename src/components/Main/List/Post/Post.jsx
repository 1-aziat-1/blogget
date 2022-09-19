import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import Content from './Content';
import Rating from './Rating';
import Delete from './Delete';
import Thumbnail from './Thumbnail';
import Date from './Date';


export const Post = ({postData}) => {
  const {
    id,
    title,
    author,
    ups,
    created,
    thumbnail,
    selftext: markdown,
  } = postData;


  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} />

      <Content title={title} author={author} markdown={markdown} id={id}/>

      <Rating ups={ups} />

      <Date date={created}/>

      <Delete />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
