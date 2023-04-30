import styled from 'styled-components';

const LoginSComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--primaryDIVI);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;

    img {
      height: 130px;
      border-radius: 50%;
    }

    h1 {
      font-family: "Roboto", "Ubuntu", sans-serif;
      font-size: 1.7rem;
      font-weight: 400;
      color: #350b4b;
    }

    label {
      margin: 0.5rem;
    }

    input {
      border: 0.05rem solid gray;
      background-color: var(--primaryDIVI);
      height: 1.4375em;
      min-width: 0;
      width: 20rem;
      font-size: 1.6rem;
      font-weight: 500;
      outline: none;
      padding: 0.8rem;
      border-radius: 0.2rem;
      color: var(--secundaryDIVI);

      :hover {
        border: 0.05rem solid var(--secundaryDIVI);
        animation-duration: 10ms;
        box-shadow: 0px 3px 1px -2px var(--primaryDIVI);
      }
      :focus {
        outline: 0;
        border: 0.05rem solid var(--secundaryDIVI);
      }
    }

    div {
      display: flex;
      flex-direction: column;

      button {
        font-size: 1.6rem;
        margin: 1em 0 5em 0;
        padding: 0.55em 1em;
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

export default LoginSComponent;
