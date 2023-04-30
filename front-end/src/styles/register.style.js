import styled from 'styled-components';

const RegisterSComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  height: 100vh;
  /* border: 1px solid red; */
  /* margin: 0;
  padding: 0; */
  /* font-family: "Roboto"; */
  /* background-color: #350B4B; */

  form {
    /* border: 1px solid gray; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    /* height: 90vh; */

    img {
      height: 130px;
      border-radius: 50%;
    }

    h1 {
      font-family: "Roboto", "Ubuntu", sans-serif;
      font-size: 1.7rem;
      font-weight: 400;
      color: var(--primaryDIVI);
      /* color: white; */
    }

    label {
      border: 1 solid red;
      /* display: flex; */
      /* flex-direction: row; */
      /* background-color: black; */
      margin: 0.5rem;
    }

    input {
      border: 0.05rem solid gray;
      /* border-color: gray; */
      /* color grey; */
      /* background-color: black; */
      height: 1.4375em;
      min-width: 0;
      width: 20rem;
      font-size: 1rem;
      font-weight: 500;
      outline: none;
      padding: 0.8rem;
      border-radius: 0.2rem;
      /* color: #350B4B; */

      :hover {
        /* outline: solid red; */
        border: 0.05rem inset var(--primaryDIVI);
        animation-duration: 10ms;
        /* box-shadow: 0px 3px 1px -2px #350B4B; */
        box-shadow: 0px 3px 1px -2px var(--primaryDIVI);
      }
      :focus {
        outline: 0;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      button {
        font-size: 1em;
        margin: 1em 0 5em 0;
        padding: 0.55em 1em;
        /* padding: 0.8rem; */
        border: 2px solid var(--secundaryDIVI);
        border-radius: 3px;
        color: gray;
        width: 21.8rem;
        transition: 0.2s;

        :hover {
          background-color: var(--secundaryDIVI);
          color: white;
        }
      }
    }
  }
`;

export default RegisterSComponent;
