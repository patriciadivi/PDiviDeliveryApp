import Checkout from '../components/Checkout';
import NavBar from '../components/NavBar';

function CustomerCheckout() {
  return (
    <div>
      <NavBar page="customer" />
      <Checkout />
    </div>
  );
}

export default CustomerCheckout;
