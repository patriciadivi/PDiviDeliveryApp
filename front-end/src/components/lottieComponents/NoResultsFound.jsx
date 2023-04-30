import React from 'react';
import Lottie from 'react-lottie';

import noResultsFound from '../../img/lottieFiles/noResultsFound.json';

function NoResultsFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: noResultsFound,
  };
  // { console.log('----> page', page); }
  return (
    <Lottie
      options={ defaultOptions }
      width={ 600 }
      height={ 350 }
    />
  );
}

export default NoResultsFound;
