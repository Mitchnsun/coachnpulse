import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import { GREY, GREY_LIGHT, BLUE } from '../utils/colors';

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-block;
  color: ${props => (props.hover ? GREY : BLUE)};
  padding: 1rem;
  &:hover {
    background-color: ${props => (props.hover ? GREY_LIGHT : 'transparent')}
  }
`;

const Header = () => (
  <header>
    <StyledLink to="/">COACH'N PULSE</StyledLink>
    <StyledLink to="/description/" hover>Description</StyledLink>
    <StyledLink to="/coach/" hover>Coach</StyledLink>
    <StyledLink to="/prices/" hover>Tarifs</StyledLink>
  </header>
);

export default Header;
