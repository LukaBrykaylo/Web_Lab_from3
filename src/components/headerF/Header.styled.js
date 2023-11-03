import styled from '../styled';

const HeaderContainer = styled.header`
  background-color: #242424;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.div`
  img {
    width: 70px;
    height: auto;
  } 

  .Wraper {
    display: flex;
    flex-direction: row;
  }

  .LogoName {
    display: block;
    padding-top: 10px;
    margin-left: 30px;
    font-size: 28px;
  }
  
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  .active {
    border-bottom: solid 3px #fff;
  }
  
  
  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    padding-right: 15px;
    padding-left: 15px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export { HeaderContainer, Logo, Navigation };
