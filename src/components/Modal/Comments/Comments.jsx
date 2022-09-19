import React from 'react';
import style from './Comments.module.css';
import formatDate from '../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Comments = ({commentsData}) => {
  console.log();
  return (
    <ul className={style.list}>
      {(commentsData.length > 0) ? (
        commentsData.map(({id, author, body, created}) => (
          <li className={style.item} key={id}>
            <h3 className={style.author} >{author}</h3>
            <p className={style.comment} >{body}</p>
            <time dateTime={formatDate([created])}>{formatDate([created])}</time>
          </li>
        ))
        ) : (
        <p>
          Нет комментариев
        </p>
      )}
    </ul>
  );
};

Comments.propTypes = {
  commentsData: PropTypes.array,
};
