import React from 'react';
import style from './Error.module.css';

export const Error = () => {
  console.log();
  return (
    <div className={style.container}>
      <h2 className={style.error}>404</h2>
    </div>
  );
};
