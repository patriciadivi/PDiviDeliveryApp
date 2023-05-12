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

  return (
    <Lottie
      options={defaultOptions}
      width={ (component === 'OrderDetail') ? '150px' : '250px' }
      height={ (component === 'OrderDetail') ? '130px' : '150px' }
    />
  );
}

CheckAnimation.propTypes = {
  component: PropType.string.isRequired,
};

export default CheckAnimation;
