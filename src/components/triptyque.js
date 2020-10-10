import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { BLACK } from '../utils/colors';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${BLACK};
`;

const Image = styled(props => <Img {...props} />)`
  flex-grow: 1;
  flex-basis: 30%;
`;

const Triptyque = ({ images = [] }) => (
  <Container>
    {images.map(image => <Image key={image.src} fluid={image} />)}
  </Container>
);

export default Triptyque;
