'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { GREY, GREY_LIGHT, BLUE } from '../utils/colors';

const StyledLink = styled(Link)<{ $hover?: boolean }>`
  display: inline-block;
  color: ${props => (props.$hover ? GREY : BLUE)};
  padding: 1rem;
  &:hover {
    background-color: ${props => (props.$hover ? GREY_LIGHT : 'transparent')};
  }
`;

const Header = () => (
  <header>
    <StyledLink href="/">COACH'N PULSE</StyledLink>
    <StyledLink href="/description" $hover={true}>
      Description
    </StyledLink>
    <StyledLink href="/coach" $hover={true}>
      Coach
    </StyledLink>
    <StyledLink href="/prices" $hover={true}>
      Tarifs
    </StyledLink>
  </header>
);

export default Header;
