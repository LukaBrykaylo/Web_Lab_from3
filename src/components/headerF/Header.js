import React from 'react';
import { HeaderContainer, Logo, Navigation } from './Header.styled';

const Header = () => {
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
          <li><a href="/" className='homePage'>Home</a></li>
          <li><a href="/">Catalog</a></li>
          <li><a href="/">Cart</a></li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
