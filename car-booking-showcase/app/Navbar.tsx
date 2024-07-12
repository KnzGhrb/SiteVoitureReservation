// app/Navbar.tsx
"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  padding: 10px 20px;
`;

const Logo = styled.img`
  height: 60px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  color: #000; /* Titles in black */
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo src="/logo.png" alt="Sayarent Logo" />
      </Link>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/cars">Cars</NavLink>
        <NavLink href="/rental-policies">Rental Policies</NavLink>
        <NavLink href="/about">About Us</NavLink>
      </NavLinks>
    </Nav>
  );
}
