import styled from 'styled-components';

const NavBarSComponent = styled.section`
 
 display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  
  nav {
    border: 1px solid #F89E2C;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    outline: none;
    width: 100%;
    height: 70px;
    background-color: #F89E2C;

    div {
        a {
        color: white;
        text-decoration: none;
        margin: 0px, 5px;
        background-color: #F89E2C;
        padding: 1.2rem;
        border-radius: 0.2rem;
      }

    }
    
    span {
      color: white;
      font-size: 1.2rem;
      padding: 1.7rem;
      background-color: #350B4B;
    }

    a {
      border: none;
      color: white;
      text-decoration: none;
      padding: 1.2rem 2.2rem;
      border-radius: 0.1rem;

      :hover {
        border-radius: 0.2rem;
        background-color: #350B4B;

      }
    }
    
  }
 
`;

export default NavBarSComponent;
