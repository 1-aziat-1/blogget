import React from 'react';
import PropTypes from 'prop-types';
import {useGetBest} from '../hooks/useGetBest';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [bestData] = useGetBest([]);

  return (
    <postsContext.Provider value={{bestData}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
