import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { GREY, GREY_LIGHT, BLUE } from '../utils/colors';

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: ${props => (props.hover ? GREY : BLUE)};
  padding: 1rem;
  &:hover {
    background-color: ${props => (props.hover ? GREY_LIGHT : 'transparent')};
  }
`;

const Header = () => (
  <header>
    <StyledLink to="/">COACH'N PULSE</StyledLink>
    <StyledLink to="/description/" hover="true">
      Description
    </StyledLink>
    <StyledLink to="/coach/" hover="true">
      Coach
    </StyledLink>
    <StyledLink to="/prices/" hover="true">
      Tarifs
    </StyledLink>
  </header>
);

export default Header;
