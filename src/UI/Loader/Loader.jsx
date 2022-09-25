import React from 'react';
import RingLoader from 'react-spinners/RingLoader';
import PropTypes from 'prop-types';

export const Loader = ({size}) => (
  <RingLoader color='#cc6633' css={{display: 'block'}} size={size} />
);

Loader.propTypes = {
  size: PropTypes.number,
};
