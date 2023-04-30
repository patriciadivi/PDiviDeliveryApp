import React from 'react';
import NoResultsFound from './lottieComponents/NoResultsFound';
import SNotFound from '../styles/components/SNotFound';

function NotFound() {
  return (
    <SNotFound className="test">
      <NoResultsFound />
      <aside>
        <p>Você não possui nenhum pedido</p>
      </aside>
    </SNotFound>
  );
}

export default NotFound;
