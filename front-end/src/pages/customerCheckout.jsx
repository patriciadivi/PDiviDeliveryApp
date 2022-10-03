import Checkout from '../components/Checkout';
import NavBar from '../components/NavBar';

function CustomerCheckout() {
  return (
    <div>
      <NavBar />
      <Checkout page="checkout" />
    </div>
  );
}

export default CustomerCheckout;
