import React from 'react';
import Lottie from 'react-lottie';

import inTransit from '../../img/lottieFiles/inTransit.json';

function InTransitStatus() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: inTransit,
  };

  return (
    <Lottie
      options={ defaultOptions }
      width={ 350 }
      height={ 250 }
    />
  );
}

export default InTransitStatus;
