import styled from 'styled-components';

const SCheckout = styled.section`
  background-color: var(--secundaryDIVI);
  border-radius: 0.8rem;
  color: white;
  font-size: 1.6rem;
  width: 90rem;

  h2 {
    display: flex;
    align-items: center;
    justify-content: end;

    font-size: 2rem;
    border-top: 0.1rem solid whitesmoke;
    margin: 0 1.6rem 0 0;
    padding: 1.6rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* max-width: 80rem; */

    border: 0.1rem solid var(--secundaryDIVI);
    border-radius: 0.8rem;
    background-color: var(--primaryDIVI);
    padding: 1rem;

    h3 {
      font-size: 2rem;
    }

    label {
      flex-wrap: wrap;
      /* display: flex;
      justify-content: space-between;
      align-content: center;
      flex-direction: column; */
      margin-bottom: 0.8rem;
      font-size: 1.6rem;

      select {
        border: 0.1rem solid var(--secundaryDIVI);
        border-radius: 0.4rem;
        background-color: transparent;
        cursor: pointer;
        color: var(--secundaryDIVI);
        font-size: 1.6rem;
        margin-left: 0.4rem;
        padding: 0.4rem;
        outline: none;

        option {
          background-color: var(--primaryDIVI);
          color: var(--secundaryDIVI);
        }
      }

      input {
        border: 0.1rem solid var(--secundaryDIVI);
        background-color: transparent;
        color: var(--secundaryDIVI);
        font-size: 1.6rem;

        border-radius: 0.4rem;
        margin-left: 0.4rem;
        padding: 0.4rem;
        outline: none;

        ::placeholder {
          color: var(--textPlaceholder);
        }
      }

      .inputValue {
        width: 12rem;
      }
    }
    button {
      border: 0;
      border-radius: 0.4rem;
      background-color: var(--secundaryDIVI);
      color: var(--primaryDIVI);
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 700;
      padding: 0.8rem;
      outline: none;
    }
  }
`;

export default SCheckout;
