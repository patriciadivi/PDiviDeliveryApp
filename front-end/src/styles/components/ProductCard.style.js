import styled from 'styled-components';

const ProductCardSComponent = styled.section`
  background-color: var(--secundaryDIVI);
  border-radius: 0.8rem;
  padding: 1rem;
  margin: 2rem 1rem;

  /* border: 0.1rem solid red; */

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ; 

    p {
      color: white;
      font-size: 1.6rem;
    }

    .priceProduct {
      font-size: 1.6rem;
      font-weight: bold;

      span {
        font-size: 1.6rem;
        font-weight: bold;
      }
    }

    img {
      height: 12rem;
      width: 12rem;
      object-fit: contain;
    }

    section {
      display: flex;
      justify-content: center;

      padding: 0.8rem;

      button,
      input {
        color: white;
        background-color: var(--primaryDIVI);
      }

      button {
        border-radius: 0.4rem;
        border: 0;
        cursor: pointer;

        height: 2.8rem;
        width: 3rem;
      }

      input {
        border: 0;
        border-radius: 0.4rem;
        font-size: 1.6rem;
        margin: 0 0.4rem;
        text-align: center;

        height: 2.5rem;
        width: 15rem;
      }
    }
  }
`;

export default ProductCardSComponent;
