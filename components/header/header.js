import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.a`
  font-weight: 400;
  color: rgba(255, 255, 255, 0);
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: 0.6rem 1.6rem;
  margin: 0.6rem;
  border-style: solid;
  border-width: 1px;
  transition: all 0.2s ease;
  border-image: ${props => props.theme.borderGradient};
  background: ${props => props.theme.bgGradient};
  background-clip: text;
  -webkit-background-clip: text;
`;

const Brand = styled.div`
  font-size: 3rem;
`;

const Header = () => (
  <Wrapper>
    <Brand>Share It</Brand>
    <div>
      <Link href="/about">
        <Nav>About</Nav>
      </Link>
      <Link href="/sign-up">
        <Nav>Sign up</Nav>
      </Link>
      <Link href="/log-in">
        <Nav>Log In</Nav>
      </Link>
    </div>
  </Wrapper>
);

export default Header;
