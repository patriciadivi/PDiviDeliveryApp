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
        <PendingStatus component={ component } />
        <p>
          Seu pedido está
          {' '}
          <strong>PENDENTE.</strong>
          {' '}
        </p>
      </article>
    );
  case 'Preparando':
    return (
      <article>
        <PreparingStatus component={ component } />
        <p>
          Seu pedido está sendo
          {' '}
          <strong>PREPARANDO</strong>
          .
          {' '}
        </p>
      </article>
    );
  case 'Em Trânsito':
    return (
      <article>
        <InTransitStatus component={ component } />
        <p>
          Seu pedido foi enviado e está a
          {' '}
          <strong>CAMINHO</strong>
          {' '}
          do local!
        </p>
      </article>
    );
  case 'Entregue':
    return (
      <article>
        <CheckAnimation component={ component } />
        <p>
          Seu pedido foi
          {' '}
          <strong>ENTREGUE</strong>
          {' '}
          com sucesso!
          {' '}
        </p>
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
