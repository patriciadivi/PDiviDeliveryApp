import React from 'react';
import PropType from 'prop-types';

import CheckAnimation from './lottieComponents/CheckDelivery';
import PendingStatus from './lottieComponents/PendingStatus';
import PreparingStatus from './lottieComponents/PreparingStatus';
import InTransitStatus from './lottieComponents/InTransitStatus';

function SwitchAnimation({ status, component }) {
  switch (status) {
  case 'Pendente':
    return (
      <article>
        {`--AQUI--> ${component}`}
        <PendingStatus component={ component } />
        <p>Seu pedido está PENDENTE.</p>
      </article>
    );
  case 'Preparando':
    return (
      <article>
        <PreparingStatus component={ component } />
        <p>Seu pedido está sendo PREPARANDO</p>
      </article>
    );
  case 'Em Trânsito':
    return (
      <article>
        <InTransitStatus />
        <p>Seu pedido foi enviado e está EM TRANSITO!</p>
      </article>
    );
  case 'Entregue':
    return (
      <article>
        <CheckAnimation component={ component } />
        <p>Seu pedido foi ENTREGUE com sucesso! </p>
      </article>
    );
  default:
    return <p>O status da entrega é desconhecido.</p>;
  }
}

SwitchAnimation.propTypes = {
  status: PropType.string.isRequired,
  component: PropType.string.isRequired,
};

export default SwitchAnimation;
