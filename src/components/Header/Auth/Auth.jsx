import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import {AuthLoader} from './AuthLoader/AuthLoader';


export const Auth = () => {
  const token = useSelector(state => state.token);
  const [check, setCheck] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispath = useDispatch();
  const getOut = () => {
    setCheck(!check);
  };

  const logOut = () => {
    dispath(deleteToken(token));
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <AuthLoader/>
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
          </button>
          {check && <button className={style.logout} onClick={logOut}>{'Выйти'}</button>}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};
