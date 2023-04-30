/* eslint-disable quotes */
import styled from "styled-components";

const SCustomerOrderDetail = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

 > div {
    background-color: var(--secundaryDIVI);
    border-radius: 0.8rem;
    /* border: 0.2rem solid ghostwhite; */
    color: var(--textPrimaryDIVI);

    margin: 2.4rem 1.6rem  0.8rem;
    padding: 0.8rem 1.6rem 1.6rem;
    max-width: 70rem;

    h2 {
      text-align: center;
      font-size: 3.2rem;
      margin: 0.8rem 0;
    }
 }
`;

export default SCustomerOrderDetail;
