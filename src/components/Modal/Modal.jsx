import ReactDOM from 'react-dom';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';

export const Modal = ({id, closeModal}) => {
  const overlayRef = useRef(null);

  const [{title, author, selftext: markdown}, comments] = useCommentsData(id);

  const handelClick = (e) => {
    const target = e.target;

    if (
      (target === overlayRef.current) || (e.keyCode === 27)) {
      closeModal();
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
        {title ? (
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


          <button className={style.close} onClick={closeModal}>
            <CloseIcon/>
          </button>
        </>
          ) : (
          <h2>Загрузка...</h2>
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
