"use client";

import styled from 'styled-components';
import Navbar from './Navbar';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #444;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #444;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer>
        <p>&copy; 2024 Sayarent</p>
      </Footer>
    </>
  );
}
