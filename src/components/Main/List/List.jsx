import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {usePostsData} from '../../../hooks/usePostsData';
import { postRequestAsync } from '../../../store/post/postAction';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  // const postsData = useSelector(state => state.post.posts);
  const [postsData] = usePostsData();

  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!postsData.length) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // dispatch(postRequestAsync());
        console.log('watch watch');
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);
  }, [endList.current]);

  return (
    <ul className={style.list}>
      {
        postsData.map(({data}) => (<Post key={data.id} postData={data}/>))
      }
      <li ref={endList} className={style.end}/>
    </ul>
  );
};
