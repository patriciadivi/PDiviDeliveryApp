import styled from 'styled-components';

const SCustomerProducts = styled.section`
  
  main {
    display: flex;
    flex-direction: column;
  
    background-color: #350B4B;


    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

    }

    .totalPriceButton {
      display: flex;
      justify-content: end;
      margin-right: 1.2rem;

      button {
        background-color: #F89E2C;
        border: 0;
        border-radius: 0.4rem;
        color: white;
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;     
        margin: 0.8rem 0 1.2rem 0;
        transition: 0.2s;
        &:hover {
          background-color: #e8a726;
          color: #d9e1df;
        }
      }
    }
    
  }

`;

export default SCustomerProducts;
