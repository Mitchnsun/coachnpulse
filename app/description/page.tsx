'use client';

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { WHITE, BLUE, BLACK } from "../../src/utils/colors";
import { siteMetadata } from "../../src/utils/site-metadata";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${BLACK};
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Poster = styled.article`
  height: 100%;
  text-align: right;
  color: ${WHITE};
  text-transform: uppercase;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0.85;
  background: ${BLUE};
  @media (min-width: 550px) {
    width: 600px;
    background: radial-gradient(
      circle 10px at -86% 50%,
      transparent,
      transparent 597px,
      ${BLUE} 600px
    );
    background-repeat: no-repeat;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  color: ${WHITE};
`;

const List = styled.ul`
  border-right: 2px solid ${WHITE};
  padding-right: 1rem;
  margin-right: 3rem;
`;

const Subheading = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  height: 600px;
`;

const DescriptionPage = () => {
  const { goals, sessions } = siteMetadata;
  return (
    <>
      <Container>
        <ImageWrapper>
          <Image
            src="/img/running3.jpg"
            alt="Running illustration"
            fill
            style={{
              objectFit: 'cover',
              transform: 'scaleX(-1)',
            }}
          />
        </ImageWrapper>
        <Poster>
          <div style={{ margin: "0 2rem 0 5rem" }}>
            <Title>
              Programme sportif personnalisé adapté à votre niveau et vos
              objectifs
            </Title>
            <List>
              {goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </List>
          </div>
          <div style={{ margin: "0 2rem 0 5rem" }}>
            <Title>
              Possibilité d&apos;accompagnement par des séances encadrées
            </Title>
            <Subheading>(sur le terrain ou à domicile)</Subheading>
            <List>
              {sessions.map((session) => (
                <li key={session}>{session}</li>
              ))}
            </List>
          </div>
        </Poster>
      </Container>
    </>
  );
};

export default DescriptionPage;
