import React from 'react';
import Lottie from 'react-lottie';
import PropType from 'prop-types';

import inTransit from '../../img/lottieFiles/inTransit.json';

function InTransitStatus({ component }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: inTransit,
  };

  return (
    <Lottie
      options={ defaultOptions }
      width={ (component === 'OrderDetail') ? '350px' : '250px' }
      height={ (component === 'OrderDetail') ? '190px' : '150px' }
      style={ { margin: '-1.6rem 0' } }
    />
  );
}

InTransitStatus.propTypes = {
  component: PropType.string.isRequired,
};

export default InTransitStatus;
