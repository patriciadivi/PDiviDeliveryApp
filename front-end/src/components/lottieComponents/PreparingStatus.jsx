import React from 'react';
import Lottie from 'react-lottie';
import PropType from 'prop-types';

import preparing from '../../img/lottieFiles/preparing.json';

function PreparingStatus({ component }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: preparing,
  };

  return (
    <Lottie
      options={ defaultOptions }
      width={ (component === 'OrderDetail') ? '350px' : '250px' }
      height={ (component === 'OrderDetail') ? '160px' : '150px' }
      style={ { margin: '0.8rem 0' } }
    />
  );
}

PreparingStatus.propTypes = {
  component: PropType.string.isRequired,
};

export default PreparingStatus;
