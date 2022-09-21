import {React, useContext} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store';

export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispath = useDispatch();

  const {auth} = useContext(authContext);


  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispath(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handelSubmit}>
      <Text
        As='h3'
        size={14}
        tsize={18}
      >
        {auth ? auth.name : 'Имя авторизованнного пользователя'}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      >
      </textarea>
      <button className={style.btn} >Отправить</button>
    </form>
  );
};
