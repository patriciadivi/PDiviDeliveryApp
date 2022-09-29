import React from 'react';
import PropType from 'prop-types';
import productsStore from '../store/products.store';

function ProductCard({ product }) {
  const { id, name, price, urlImage } = product;
  const {
    cart,
    addToCart,
    subFromCart,
    editQuantity,
    removeFromCart,
  } = productsStore((state) => state);
  const itemQuantity = cart.find((item) => item.id === id);

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {`${price.replace(/\./, ',')}`}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ () => subFromCart(id) }
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="text"
        name="quantity"
        defaultValue={ itemQuantity?.quantity || 0 }
        onChange={ ({ target: { value } }) => (
          value === 0
            ? removeFromCart(id)
            : editQuantity(id, Number(value))) }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ () => addToCart(id) }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropType.instanceOf(Object).isRequired,
};

export default ProductCard;
