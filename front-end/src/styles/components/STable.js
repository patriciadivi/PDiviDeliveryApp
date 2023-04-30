import styled from 'styled-components';

const STable = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  table {
    border-collapse: collapse;
    width: 100%;
  }

  thead {
    margin: 0.8rem 0;

    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 3rem 1rem;
    }
  }

  th,
  td {
    text-align: center;
    padding: 0.4rem;
  }

  tr:nth-child(even) {
    background-color: var(--secundaryDIVI);

    button {
      background-color: var(--primaryDIVI);
      color: var(--secundaryDIVI);
    }
  }

  tbody {
    background-color: var(--primaryDIVI);
    border-radius: 0.4rem;

    tr {
      display: flex;
      justify-content: space-around;
      align-items: center;

      /* margin: 0.8rem 0; */

      button {
        background-color: var(--secundaryDIVI);
        border: 0;
        border-radius: 0.4rem;
        color: var(--primaryDIVI);
        font-weight: 700;

        height: 4rem;
        padding: 0 0.8rem;
      }
    }

    .tdNome {
      width: 2rem;
      margin: 0 5rem 0 -3rem;
    }

    img {
      height: 5rem;
      /* width: 6rem; */
    }
  }
`;

export default STable;
