import styled from 'styled-components';

const SCustomerOrders = styled.main`
  display: flex;
  justify-content: center;
  /* flex-direction: column;
  align-items: center; */
  /*justify-content: center; */

  /* height: 100vh; */
  /* border: 0.2rem solid rebeccapurple; */


> section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* border: 0.2rem solid brown; */

  width: 70%;

  > div {
    display: flex;
    /* align-content: center; */
    /* align-items: center; */
    /* border: 0.2rem solid goldenrod; */


    padding: 1.6rem 0.8rem;

    > a {
      /* border: 0.2rem solid rebeccapurple; */
      background-color: var(--secundaryDIVI);
      border-radius: 0.8rem;
      padding: 0.8rem;
      margin: 2.4rem 1.6rem 0;

      height: 30rem;
      width: 20rem;
      transition: 0.2s;
      text-decoration: none;

      :hover {
        background-color: #f6b93b;
        border-radius: 0.8rem;
      }

      div {

        span {
          display: flex;
          flex-direction: column;
          align-items: center;

          /* color: var(--primaryDIVI); */
          font-size: 1.6rem;
          line-height: 1rem;
          
          margin: 1.6rem 0 0.8rem;

          p {
            color: var(--textPrimaryDIVI);
            font-size: 1.6rem;

            margin: 0.4rem 0 0.8rem;
          }

        }

      } 
    }
  }

}

`;

export default SCustomerOrders;
