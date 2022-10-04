import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';
import {Loader} from '../../UI/Loader/Loader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [{title, author, selftext: markdown}, comments, status] = useCommentsData(id);
  const handelClick = (e) => {
    const target = e.target;

    if (
      (target === overlayRef.current) || (e.keyCode === 27)) {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handelClick);
    document.addEventListener('keydown', handelClick);
    return () => {
      document.removeEventListener('click', handelClick);
      document.removeEventListener('keydown', handelClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Loader size={50}/>}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank'
                    },
                  },
                },
              }}>
                {markdown}
              </Markdown>
            </div>

            <p className={style.author}>{author}</p>

            <FormComment/>

            <Comments commentsData={comments}/>

            <button className={style.close} onClick={() => {
              navigate(`/category/${page}`);
            }}>
              <CloseIcon/>
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
