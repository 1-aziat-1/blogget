import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text/Text';

export const Heading = ({text}) => (
  <Text
    As='h1'
    size={22}
    tsize={26}
    className={style.heading}
    center
    fontWeight={'bold'}
  >
    {text}
  </Text>
);

Heading.propTypes = {
  text: PropTypes.string,
};
