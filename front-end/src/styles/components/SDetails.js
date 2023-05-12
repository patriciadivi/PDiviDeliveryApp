import styled from 'styled-components';

const SDetails = styled.section`
  .customerDetails {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    /* border: 0.2rem solid red; */

    margin: 1.6rem 0.8rem 0;
    /* width: 100%; */

    table {
        background-color: var(--primaryDIVI);
        border-radius: 0.4rem;
        padding: 0.8rem;

        th,
        td {
          padding: 0.4rem;
          text-align: center;
          font-size: 1.6rem;
        }
      }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 0.8rem;

      h2 {
        display: flex;
        /* gap: 0.8rem; */

        color: var(--primaryDIVI);
        font-size: 3.2rem;

        margin: 0.4rem 0 0;

        strong {
          color: var(--primaryDIVI);
          font-size: 1.6rem;

          margin: 0 0.4rem 0 0;
        }
      }
    }
  }

  .sellerDetails {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    /* border: 0.2rem solid black; */

    margin: 1.6rem 0.8rem 0;

    table {
      background-color: var(--primaryDIVI);
      border-radius: 0.4rem;

      th,
      td {
        padding: 0.8rem;
        text-align: center;
        font-size: 1.6rem;
      }
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      margin-top: 0.8rem;

      h2 {
        display: flex;
        gap: 0.4rem;

        color: var(--primaryDIVI);
        font-size: 3.2rem;

        margin: 0.4rem 0 0;

        strong {
          color: var(--primaryDIVI);
          font-size: 1.6rem;

        }
      }
    }

  }
`;

export default SDetails;
