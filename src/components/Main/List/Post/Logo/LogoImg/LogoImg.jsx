import React from 'react';
import style from './LogoImg.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const LogoImg = ({title, thumbnail}) => (
  <img className={style.img} src={thumbnail.includes('https') ? thumbnail : notphoto} alt={title}/>
);

LogoImg.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
