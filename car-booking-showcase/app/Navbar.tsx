// app/Navbar.tsx
"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e6d7bc; /* Darker beige */
  padding: 10px 30px; /* Reduced padding */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow for relief */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Logo = styled.img`
  height: 50px; /* Reduced the size of the logo */
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  color: #5a5a5a; /* Darker grey for text */
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #0070f3; /* Change color on hover */
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

export default function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <Link href="/" passHref>
          <Logo src="/logo.png" alt="Sayarent Logo" />
        </Link>
      </LogoContainer>
      <NavLinksContainer>
        <NavLinks>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#policies">Politiques</NavLink>
          <NavLink href="#about">À propos</NavLink>
        </NavLinks>
      </NavLinksContainer>
      <RightSide>
        <LanguageButton>
          <img src="/fr-flag.png" alt="FR" width="30" />
        </LanguageButton>
        <LanguageButton>
          <img src="/ma-flag.png" alt="MA" width="30" />
        </LanguageButton>
      </RightSide>
    </Nav>
  );
}
