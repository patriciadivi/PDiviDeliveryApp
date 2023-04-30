/* eslint-disable quotes */
import styled from "styled-components";

const SCustomerProducts = styled.section`
  main {
    display: flex;
    flex-direction: column;

    background-color: #350b4b;

    position: absolute;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      max-width: 90%;
      margin: 0 auto;
    }

    .totalPriceButton {
      display: flex;
      justify-content: end;
      margin-right: 1.2rem;
      position: fixed;
      right: 0;
      bottom: 0;

      button {
        background-color: var(--secundaryDIVI);
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
