import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

import Layout from "../components/layout";
import TablePrices from "../components/tablePrices";
import { WHITE, BLACK, YELLOW, BLUE } from "../utils/colors";
import { useSiteMetadata } from "../utils/use-site-metadata";

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
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <Helmet>
        <title>{title} | Prix</title>
        <meta name="description" content={description} />
      </Helmet>
      <Container>
        <Section style={{ background: BLACK, flexGrow: 5 }}>
          <Title>Tarifs pour programme à distance</Title>
          <Text>Exemples de tarifs forfaitaires programme d'entraînement</Text>
          <TablePrices />
          <Text>
            Les conseils (techniques, diététiques, matériels) sont inclus dans
            votre progression et l'accompagnement sportif.
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
              Plus de 20 kms autour de l'agglomération grenobloise: 0,50€/km
            </Li>
            <Li>Possibilité d'un bilan spécifique complet diététique: 80€</Li>
          </List>
        </Section>
      </Container>
      <TriptyqueContainer>
        <ImageContainer>
          <StaticImage
            src="../img/swimming2.jpg"
            alt="Running Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
        <ImageContainer>
          <StaticImage
            src="../img/cycling.jpg"
            alt="Swimming Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
        <ImageContainer>
          <StaticImage
            src="../img/running5.jpg"
            alt="Cycling Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
      </TriptyqueContainer>
    </Layout>
  );
};

export default PricesPage;
