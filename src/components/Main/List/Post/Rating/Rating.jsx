import React from 'react';
import style from './Rating.module.css';
import Time from './Time';
import PropTypes from 'prop-types';

export const Rating = ({ups, date}) => (
  <>
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рейтинг'></button>
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Понизить рейтинг'></button>
    </div>
    <Time date={date}/>
  </>
);

Rating.propTypes = {
  ups: PropTypes.number,
  date: PropTypes.string,
};
