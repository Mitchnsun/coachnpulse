import React from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Triptyque from '../components/triptyque';
import TablePrices from '../components/tablePrices';
import { WHITE, BLACK, YELLOW, BLUE } from '../utils/colors';

const Container = styled.div`
  @media (min-width: 950px) {
    display: flex;
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

const PricesPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title} | Prix</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Container>
      <Section style={{ background: BLACK, flexGrow: 5 }}>
        <Title>Exemples de tarifs forfaitaires</Title>
        <Text>Exemples de tarifs forfaitaires programme d'entraînement</Text>
        <TablePrices />
        <Text>Les conseils (techniques, diététiques, matériels) sont inclus dans votre progression et l'accompagnement sportif.</Text>
      </Section>
      <Section style={{ background: BLUE, flexBasis: '30%' }}>
        <Title>Possibilité de séances encadrées</Title>
        <Subtitle>Sur le terrain ou à domicile (course à pied, natation, vélo, préparation physique) <strong>35€/h</strong></Subtitle>
        <Title>Forfaits séances</Title>
        <List>
          <Li>3 séances: 95€</Li>
          <Li>10 séances: 285€</Li>
          <Li>Plus de 20 kms autour de l'agglomération grenobloise: 0,50€/km</Li>
          <Li>Possibilité d'un bilan spécifique complet diététique: 80€</Li>
        </List>
      </Section>
    </Container>
    <Triptyque images={[
      data.swimImage.childImageSharp.fluid,
      data.cycleImage.childImageSharp.fluid,
      data.runningImage.childImageSharp.fluid
    ]}/>
  </Layout>
);

export default PricesPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    runningImage: file(relativePath: { eq: "running5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    swimImage: file(relativePath: { eq: "swimming2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cycleImage: file(relativePath: { eq: "cycling.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
