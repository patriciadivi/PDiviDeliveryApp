/* eslint-disable react/jsx-curly-spacing */
import React from 'react';
import Lottie from 'react-lottie';

import PropType from 'prop-types';
import CheckDelivery from '../../img/lottieFiles/checkDelivery.json';

function CheckAnimation({ component }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CheckDelivery,
  };
  // { console.log('----> page', page); }
  return (
    <Lottie
      options={defaultOptions}
      width={ (component === 'OrderDetail') ? '180px' : '250px' }
      height={ (component === 'OrderDetail') ? '160px' : '150px' }
    />
  );
}

CheckAnimation.propTypes = {
  component: PropType.string.isRequired,
};

export default CheckAnimation;
