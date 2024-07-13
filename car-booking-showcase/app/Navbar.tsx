"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e6d7bc; /* Darker beige */
  padding: 15px 30px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 70px; /* Increase the size of the logo */
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  justify-content: flex-start;
  margin-left: 5%; /* Adjusted margin */
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


export default function Navbar() {
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo src="/logo.png" alt="Sayarent Logo" />
      </Link>
      <NavLinksContainer>
        <NavLinks>
            <NavLink href="/cars">Services</NavLink>
            <NavLink href="/rental-policies">Politiques</NavLink>
            <NavLink href="/about">A propos</NavLink>
        </NavLinks>
      </NavLinksContainer>
      <RightSide>
        {/* Placeholder for future content */}
      </RightSide>

    </Nav>
  );
}
