import React from 'react';
import style from './Logo.module.css';
import LogoImg from './LogoImg';
import PropTypes from 'prop-types';

export const Logo = ({title, author}) => (
  <>
    <LogoImg title={title}/>
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href='#post'>
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href='#author'>
        {author}
      </a>
    </div>
  </>
);

Logo.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
