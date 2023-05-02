/* eslint-disable quotes */
import styled from "styled-components";

const SCustomerProducts = styled.section`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--primaryDIVI);

    position: absolute;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      max-width: 75%;
      /* margin: 0 auto; */
    }

    .totalPriceButton {
      display: flex;
      justify-content: end;
      margin-right: 1.6rem;
      position: fixed;
      right: 0;
      bottom: 0;

      button {
        display: flex;
        align-items: center;

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
          background-color: var(--hoverSecundaryDIVI);
          border: 0.2rem solid var(--secundaryDIVI);
          color: var(--primaryDIVI);
        }

        strong {
          font-size: 1.2rem;
          margin: 0 0.8rem 0 0;
        }
      }
    }
  }
`;

export default SCustomerProducts;
