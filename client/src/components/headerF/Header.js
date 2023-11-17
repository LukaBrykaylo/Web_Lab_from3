import React from 'react';
import { HeaderContainer, Logo, Navigation } from './Header.styled';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo>
        <div className='Wraper'>
          <img src="./LogoLion.png" alt="Logo" />
          <span className='LogoName'>ZooMania</span>
        </div>
      </Logo>
      <Navigation>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'homePage active' : 'homePage'}>Home</Link></li>
          <li><Link to="/catalog" className={location.pathname === '/catalog' ? 'active' : ''}>Catalog</Link></li>
          <li><Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link></li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
