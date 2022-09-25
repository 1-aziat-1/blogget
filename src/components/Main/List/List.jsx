import {usePostsData} from '../../../hooks/usePostsData';
import {Loader} from '../../../UI/Loader/Loader';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const [posts, loading] = usePostsData();
  return (
    <ul className={style.list}>
      {loading ?
        (<Loader size={100}/>) :
        (posts.map(({data}) => (<Post key={data.id} postData={data}/>)))
      }
    </ul>
  );
};
