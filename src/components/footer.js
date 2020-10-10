import React from 'react';
import styled from 'styled-components';
import { GREY, BLACK } from '../utils/colors';

const FooterContainer = styled.footer`
  background: ${BLACK};
  color: ${GREY};
  text-align: center;
  padding: 1em;
  font-size: 0.8rem;
`;

const Footer = () => (
  <FooterContainer>Encadrement sportif personalisé ®Coach'n Pulse</FooterContainer>
);

export default Footer;
