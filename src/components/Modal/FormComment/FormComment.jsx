import React, {useContext, useRef} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const textareaRef = useRef(null);

  const publishComment = (e) => {
    e.preventDefault();
    textareaRef.current.focus();
    textareaRef.current.value = '';
  };

  return (
    <form className={style.form} onSubmit={publishComment}>
      <Text
        As='h3'
        size={14}
        tsize={18}
      >
        {auth ? auth.name : 'Имя авторизованнного пользователя'}
      </Text>
      <textarea className={style.textarea} ref={textareaRef}></textarea>
      <button className={style.btn} >Отправить</button>
    </form>
  );
};
