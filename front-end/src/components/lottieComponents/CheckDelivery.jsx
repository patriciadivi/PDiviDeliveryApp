/* eslint-disable react/jsx-curly-spacing */
import React from 'react';
import Lottie from 'react-lottie';

import PropType from 'prop-types';
import CheckDelivery from '../../img/lottieFiles/checkDelivery.json';

function CheckAnimation({ page }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CheckDelivery,
  };
  // { console.log('----> page', page); }
  return (
    <Lottie
      options={defaultOptions}
      width={(page === 'customer') ? '120px' : '150px'}
      height={(page === 'customer') ? '100px' : '120px'}
    />
  );
}

CheckAnimation.propTypes = {
  page: PropType.string.isRequired,
};

export default CheckAnimation;
