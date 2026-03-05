'use client';

import React from "react";
import Image from "next/image";
import styled from "styled-components";

import TablePrices from "../../src/components/tablePrices";
import { WHITE, BLACK, YELLOW, BLUE } from "../../src/utils/colors";

const Container = styled.div`
  @media (min-width: 950px) {
    display: flex;
  }
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

const Section = styled.section`
  padding: 1rem;
  flex: 1 0 auto;
`;

const Title = styled.h2`
  margin: 0;
  color: ${WHITE};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  color: ${WHITE};
  font-weight: normal;
  letter-spacing: 0.1rem;
`;

const Text = styled.p`
  color: ${YELLOW};
  margin: 1rem 0;
`;

const List = styled.ul`
  color: ${WHITE};
`;

const Li = styled.li`
  list-style: disc outside none;
`;

const PricesPage = () => {
  return (
    <>
      <Container>
        <Section style={{ background: BLACK, flexGrow: 5 }}>
          <Title>Tarifs pour programme à distance</Title>
          <Text>Exemples de tarifs forfaitaires programme d&apos;entraînement</Text>
          <TablePrices />
          <Text>
            Les conseils (techniques, diététiques, matériels) sont inclus dans
            votre progression et l&apos;accompagnement sportif.
          </Text>
        </Section>
        <Section style={{ background: BLUE, flexBasis: "30%" }}>
          <Title>Possibilité de séances encadrées</Title>
          <Subtitle>
            Sur le terrain ou à domicile (course à pied, natation, vélo,
            préparation physique) <strong>35€/h</strong>
          </Subtitle>
          <Title>Forfaits séances</Title>
          <List>
            <Li>3 séances: 95€</Li>
            <Li>10 séances: 285€</Li>
            <Li>
              Plus de 20 kms autour de l&apos;agglomération grenobloise: 0,50€/km
            </Li>
            <Li>Possibilité d&apos;un bilan spécifique complet diététique: 80€</Li>
          </List>
          <Title>Coaching et préparation mentale</Title>
          <Subtitle>
            En présentiel: <strong>60€/h</strong>
          </Subtitle>
          <List>
            <Li>Forfait 5 séances: 240€</Li>
          </List>
          <Subtitle>
            En visio: <strong>40€/h</strong>
          </Subtitle>
          <List>
            <Li>Forfait 5 séances: 160€</Li>
          </List>
        </Section>
      </Container>
      <TriptyqueContainer>
        <ImageContainer>
          <Image
            src="/img/swimming2.jpg"
            alt="Running Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="/img/cycling.jpg"
            alt="Swimming Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            src="/img/running5.jpg"
            alt="Cycling Illustration"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageContainer>
      </TriptyqueContainer>
    </>
  );
};

export default PricesPage;
