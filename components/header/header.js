import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  font-size: 30px;
`;

const Header = () => (
  <HeaderStyle>
    Share It
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </HeaderStyle>
);

export default Header;
