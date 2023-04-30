import styled from 'styled-components';

const SSellerOrderDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    /* border: 0.2rem solid darkcyan; */
    background-color: var(--secundaryDIVI);
    border-radius: 0.8rem;
    color: var(--secundaryDIVI);

    margin: 1.6rem 1.6rem 0.8rem;
    padding: 0.8rem 1.6rem;

    > h2 {
      color: var(--textPrimaryDIVI);
      font-size: 3.2rem;
      text-align: center;

      margin: 0.8rem 0;
    }
  }


`;

export default SSellerOrderDetail;
