import React from 'react';
import styled from 'styled-components';

const InfosContainer = styled.div`
  padding: 1rem;
  @media (min-width: 750px) {
    display: flex;
  }
`;
const Text = styled.p`
  font-size: 1.25rem;
  flex-grow: 1;
  @media (max-width: 750px) {
    width: 100%;
    text-align: center;
  }
`;

const Infos = () => (
  <InfosContainer>
    <Text style={{ letterSpacing: '2px' }}>Demande d'informations</Text>
    <Text>07 68 79 44 78 | luck.nahon@gmail.com</Text>
  </InfosContainer>
);

export default Infos;