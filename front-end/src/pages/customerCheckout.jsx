import Checkout from '../components/Checkout';
import NavBar from '../components/NavBar';
import SCustomerCheckout from '../styles/pages/SCustomerCheckout';

function CustomerCheckout() {
  return (
    <div>
      <NavBar page="customer" />
      <SCustomerCheckout>
        <Checkout />
      </SCustomerCheckout>
    </div>
  );
}

export default CustomerCheckout;
