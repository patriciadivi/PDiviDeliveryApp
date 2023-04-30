import styled from 'styled-components';

const SSellerOrders = styled.main`
display: flex;
justify-content: center;
/* border: 0.1rem solid bisque; */

/* height: 100vh; */

.sectionOrder {
    /* border: 0.1rem solid red; */
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    justify-content: space-around;

    padding: 1.6rem 0.8rem;
    width: 80%;

    .linkOrder {
      /* border: 0.1rem solid gainsboro; */

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
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            /* border: 0.2rem solid var(--primaryDIVI); */
            font-size: 1.6rem;
            color: var(--textPrimaryDIVI);
            margin: 0.8rem 0;
          }

        .orderStatus {
          border-bottom: 0.2rem solid var(--primaryDIVI);
          color: var(--textPrimaryDIVI);
          font-size: 1.6rem;
          margin-bottom: 1.6rem;
        }

        span {
          display: flex;
          flex-direction: column;
          align-items: center;

          color: var(--primaryDIVI);
          font-size: 1.6rem;
          
          line-height: 1rem;

          p {
            font-size: 1.6rem;
            color: var(--textPrimaryDIVI);

          }

        }
        
      }
      
    }
  }

`;

export default SSellerOrders;
