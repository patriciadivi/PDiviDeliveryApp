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
      width={ (component === 'OrderDetail') ? '350px' : '250px' }
      height={ (component === 'OrderDetail') ? '160px' : '150px' }

    />
  );
}

PendingStatus.propTypes = {
  component: PropType.string.isRequired,
};

export default PendingStatus;
