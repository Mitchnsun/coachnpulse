'use client';

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import Infos from "../../src/components/infos";
import { WHITE, BLACK, YELLOW } from "../../src/utils/colors";

const Container = styled.div`
  background: ${BLACK};
  @media (min-width: 800px) {
    display: flex;
    height: 300px;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: ${WHITE};
  padding-bottom: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
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

const Article = styled.article`
  @media (min-width: 800px) {
    margin-left: 15%;
  }
  @media (max-width: 800px) {
    margin: 0 2.5rem;
    padding: 1rem 0;
  }
`;

const Text = styled.p`
  color: ${YELLOW};
  font-weight: normal;
  letter-spacing: 0.1rem;
  margin: 0;
`;

const CoachPage = () => {
  return (
    <>
      <Container>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            width: 250,
            height: 300,
            flexShrink: 0,
          }}
        >
          <Image
            src="/img/Luc-2025.jpeg"
            alt="Luc Nahon"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <Article>
          <Title>Luc Nahon</Title>
          <Text>
            Educateur sportif // Diplômé d&apos;Etat DEJEPS Triathlon
            <br />
            Entraîneur de triathlon, préparateur mental
            <br />
            Maître Nageur Sauveteur
          </Text>
          <br />
          <Text>
            Entraîneur GUC (Grenoble Université Club) section triathlon
            <br />
            Responsable formation et enseignant Eklore-ed sport: running, diététique
            sportive, musculation, fitness...
            <br />
            Coaching de sportifs d&apos;ultra distance en sport d&apos;endurance
            <br />
            Finisher de plusieurs Ironman en Europe (Embrun, Zürich, Nice...)
          </Text>
        </Article>
      </Container>
      <TriptyqueContainer>
        <ImageContainer>
          <Image
            src="/img/running.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="/img/swimming.jpg"
            alt="Swimming Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="/img/cycling2.jpg"
            alt="Cycling Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
      </TriptyqueContainer>
      <Infos />
    </>
  );
};

export default CoachPage;
