import React from 'react';
import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text/Text';

export const Rating = ({ups}) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'></button>
    <Text
      As='p'
      className={style.ups}
    >
      {ups}
    </Text>
    <button className={style.down} aria-label='Понизить рейтинг'></button>
  </div>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
