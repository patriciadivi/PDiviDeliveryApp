import styled from 'styled-components';

const SOrderDetail = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .customerOrderDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* border: 0.2rem solid ghostwhite; */
    border-radius: 0.4rem;
    color: var(--primaryDIVI);
    font-size: 1.6rem;

    margin-bottom: 0.8rem;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* border: 0.2rem solid ghostwhite; */


      svg {
        /* border: 0.2rem solid black; */
      }

      > p {
        margin: 0.8rem 0 2.4rem;
        text-align: center;
        font-size: 1.6rem;
      }
    }

    .OrderDetailSpan {
      /* border: 0.2rem solid greenyellow; */
      display: grid;
      /* grid-template-rows: 1fr repeat(1fr); */
      /* grid-gap: 0rem 1.6rem; */
      grid-gap: 0rem 2.4rem;
      grid-auto-flow: column;

      span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 0.8rem;

        p {
          color: var(--primaryDIVI);
          font-size: 1.6rem;

          margin: 0.4rem 0;
        }
      }
    }

    img {
      height: 14rem;
    }

    p {
      font-size: 1.6rem;
      margin: 0.8rem 0 0;
    }

    p:nth-child(5) {
      border-bottom: 0.1rem solid var(--primaryDIVI);
      margin-bottom: 0.8rem;
      padding: 0.8rem;
    }

    button {
      background-color: transparent;
      border: 0.2rem solid var(--primaryDIVI);
      border-radius: 0.4rem;
      color: var(--primaryDIVI);
      
      padding: 0.8rem;
      margin: 1.6rem 0.8rem 0;
      outline: none;

      transition: 0.2s;

      :hover {
        background-color: var(--primaryDIVI);
        border: 0.2rem solid var(--primaryDIVI);
        color: var(--textPrimaryDIVI);
        cursor: pointer;
      }

      :disabled {
        color: var(--textPlaceholder);

        :hover {
          background-color: transparent;
          color: var(--textPlaceholder);
          cursor: no-drop;
        }
      }
    }

  }

  .sellerOrderDetail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* border: 0.2rem solid firebrick; */
    /* display: flex; */
    color: var(--primaryDIVI);

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 0.8rem;

      p {
        color: var(--primaryDIVI);
        font-size: 1.6rem;

        margin: 0.4rem 0;
      }
    }

    div {
      button {
        background-color: transparent;
        border: 0.2rem solid var(--primaryDIVI);
        border-radius: 0.4rem;
        color: var(--primaryDIVI);
        
        padding: 0.8rem;
        margin: 1.6rem 0.8rem 0;
        outline: none;

        transition: 0.2s;

        :hover {
          background-color: var(--primaryDIVI);
          border: 0.2rem solid var(--primaryDIVI);
          color: var(--textPrimaryDIVI);
          cursor: pointer;
        }

        :disabled {
          color: var(--textPlaceholder);

          :hover {
            background-color: transparent;
            color: var(--textPlaceholder);
            cursor: no-drop;
          }
        }
      }

    }

  }
`;

export default SOrderDetail;
