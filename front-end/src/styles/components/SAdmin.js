import styled from 'styled-components';

const SAdmin = styled.section`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  background-color: var(--secundaryDIVI);
  border-radius: 0.8rem;
  color: var(--textPrimaryDIVI);
  font-size: 1.6rem;

  padding: 1rem;
  width: 60%;

  position: relative;
  /* border: 0.1rem solid green; */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    /* border: 0.1rem solid var(--primaryDIVI);
    box-shadow: 3px 3px 1px -2px var(--primaryDIVI); */
    border-radius: 0.8rem;
    margin-bottom: 1.6rem;
    padding: 0.8rem;

    h2 {
      font-weight: 700;
      font-size: 3.2rem;
      margin: 0.8rem 0;
    }

    aside {
      position: absolute;
      top: 0%;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: rgba(0,0,0,0.9);
      border-radius: 0.8rem;

      width: 100%;
      height: 100%;

      p {
        color: var(--textPrimaryDIVI);
        font-size: 2.4rem;
        font-weight: 700;
        text-align: center;

      }
    }

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      color: var(--primaryDIVI);

      input {
        background-color: transparent;
        border: 0.05rem solid var(--primaryDIVI);
        border-radius: 0.2rem;
        color: var(--primaryDIVI);
        font-size: 1.6rem;

        outline: none;
        padding: 0.4rem;

        :hover {
          border: 0.05rem inset var(--primaryDIVI);
          animation-duration: 10ms;
          box-shadow: 0px 3px 1px -2px var(--primaryDIVI);
        }

        ::placeholder {
          /* color: var(--textPlaceholder); */
          font-size: 1.6rem;
        }

        :focus {
          outline: 0;
          border: 0.2rem solid var(--primaryDIVI);

        }
      }

      select {
        border: 0.1rem solid var(--primaryDIVI);
        border-radius: 0.4rem;
        background-color: transparent;
        cursor: pointer;
        color: var(--primaryDIVI);
        font-size: 1.6rem;
        margin-left: 0.4rem;
        padding: 0.4rem;
        outline: none;

        option {
          background-color: var(--primaryDIVI);
          color: var(--secundaryDIVI);

          :hover {
            background-color: rgba(248,158,44, 0.1);
          }
        }
      }
    }

    button {
      background-color: var(--primaryDIVI);
      border: 0.1rem solid var(--primaryDIVI);
      border-radius: 0.4rem;
      color: var(--textPrimaryDIVI);

      padding: 1.2rem 2rem;
      transition: 0.2s;

      :hover {
        background-color: var(--secundaryDIVI);
        border: 0.1rem solid var(--primaryDIVI);
        color: white;
      }
    }

  }

  table {
    background-color: var(--primaryDIVI);
    border-radius: 0.4rem;
    padding: 0.8rem 1.6rem;


    th,
    td {
      text-align: center;
      padding: 0.4rem 1.6rem;
    }

    tbody {
      td {

        button {
          background-color: var(--primaryDIVI);
          border: 0.1rem solid var(--secundaryDIVI);
          border-radius: 0.4rem;
          color: var(--textPrimaryDIVI);

          padding: 0.8rem 1.6rem;
          transition: 0.2s;

          :hover {
            background-color: var(--secundaryDIVI);
            border: 0.1rem solid var(--primaryDIVI);
            color: white;
          }
        }
      }
    }
  }

`;

export default SAdmin;
