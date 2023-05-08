import React from 'react';
import Lottie from 'react-lottie';
import PropType from 'prop-types';

import pending from '../../img/lottieFiles/pending.json';

// const currentPathname = window.location.pathname;

function PendingStatus({ component }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pending,
  };
  // { console.log('----> component', component); }
  return (
    <Lottie
      options={ defaultOptions }
      width={ (component === 'OrderDetail') ? '250px' : '230px' }
      height={ (component === 'OrderDetail') ? '220px' : '250px' }
    />
  );
}

PendingStatus.propTypes = {
  component: PropType.string.isRequired,
};

export default PendingStatus;
