import styled from 'styled-components';

const NavBarSComponent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  nav {
    border: 1px solid #f89e2c;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    background-color: var(--secundaryDIVI);
    padding: 0 2.4rem 0 1.6rem;
    outline: none;

    width: 100%;
    height: 6rem;

    .logo {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.4rem;
      width: 1.6rem;
      /* max-height: fit-content; */

        &:hover {
        border-radius: 0.2rem;
        background-color: var(--secundaryDIVI);
        height: 2.4rem;
        width: 1.6rem;
        /* padding: 1.7rem 2.2rem; */
      }

      div {
        height: 5.6rem;
        /* border: 1px solid green; */
        background-color: var(--secundaryDIVI);


        img {
          /* border: 1px solid black; */
          height: 56px;
        }
      }
    }

    div {
      a {
        color: white;
        text-decoration: none;
        margin: 0rem, 0.5rem;
        background-color: var(--secundaryDIVI);
        padding: 1.2rem;
        border-radius: 0.4rem;
      }
    }

    span {
      color: white;
      font-size: 2rem;
      padding: 2.4rem;
      background-color: var(--primaryDIVI);
    }

    a {
      border: none;
      color: white;
      font-size: 1.6rem;
      text-decoration: none;
      padding: 1.2rem 2.2rem;
      border-radius: 0.4rem;

      :hover {
        border-radius: 0.2rem;
        background-color: #350b4b;
        padding: 1.7rem 2.2rem;
      }
    }
  }
`;

export default NavBarSComponent;
