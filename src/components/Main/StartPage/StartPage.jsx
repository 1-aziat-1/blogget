import React from 'react';
import {useSelector} from 'react-redux';
import style from './StartPage.module.css';

export const StartPage = () => {
  const token = useSelector(state => state.token.token);
  return (
    <div className={style.container}>
      <h2 className={style.title}>Стартовая страница</h2>
      <h3 className={style.subtitle}>Добро пожаловать!</h3>
      <p className={style.text}>
        {token ? 'Выберите категорию' : 'Авторизируйтесь'}
      </p>
    </div>
  );
};
