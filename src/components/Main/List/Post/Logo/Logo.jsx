import React from 'react';
import style from './Logo.module.css';
import LogoImg from './LogoImg';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const Logo = ({title, author}) => (
  <>
    <LogoImg title={title}/>
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a' size='18' tsize={24} className={style.linkPost} href='#post'>
          {title}
        </Text>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
    </div>
  </>
);

Logo.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};