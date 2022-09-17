import React from 'react';
import PropTypes from 'prop-types';
import {useToken} from '../hooks/useToken';

export const tokenContext = React.createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, deltoken] = useToken();

  return (
    <tokenContext.Provider value={{token, deltoken}}>
      {children}
    </tokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
