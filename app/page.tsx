'use client';

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Infos from "../src/components/infos";
import { BLACK } from "../src/utils/colors";

const Container = styled.div`
  display: flex;
  background: ${BLACK};
  align-items: center;
`;

const TriptyqueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${BLACK};
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  flex-basis: 30%;
  position: relative;
  min-height: 300px;
  @media (max-width: 750px) {
    flex-basis: 50%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <Container>
        <div style={{ flexGrow: 1, flexBasis: '30%', position: 'relative', minHeight: '400px' }}>
          <StyledImage
            src="/img/running3.jpg"
            alt="Running illustration"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div style={{ flexGrow: 2, flexBasis: '30%', margin: 'auto 15%', position: 'relative', minHeight: '300px' }}>
          <StyledImage
            src="/img/blacklogo.jpg"
            alt="Black logo illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </Container>
      <TriptyqueContainer>
        <ImageContainer>
          <StyledImage
            src="/img/running2.jpg"
            alt="Running Illustration"
            fill
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src="/img/swimming2.jpg"
            alt="Swimming Illustration"
            fill
          />
        </ImageContainer>
        <ImageContainer>
          <StyledImage
            src="/img/cycling2.jpg"
            alt="Cycling Illustration"
            fill
          />
        </ImageContainer>
      </TriptyqueContainer>
      <Infos />
    </>
  );
};

export default Home;
