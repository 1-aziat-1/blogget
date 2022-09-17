import React from 'react';
import style from './LogoImg.module.css';
import PropTypes from 'prop-types';

export const LogoImg = ({title, thumbnail}) => (
  <img className={style.img} src={thumbnail} alt={title}/>
);

LogoImg.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
