import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import { WHITE, BLUE, BLACK } from '../utils/colors';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${BLACK};
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const Image = styled(props => <Img {...props} />)`
  width: 100%;
  max-width: 1024px;
  height: 600px;
  transform: scaleX(-1);
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
    background: radial-gradient(circle 10px at -86% 50%, transparent, transparent 597px, ${BLUE} 600px);
    background-repeat:no-repeat;
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

const DescriptionPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title} | Description</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Container>
      <Image fluid={data.runningImage.childImageSharp.fluid} />
      <Poster>
        <div style={{ margin: '0 2rem 0 5rem' }}>
          <Title>Programme sportif personnalisé adapté à votre niveau et vos objectifs</Title>
          <List>
            {data.site.siteMetadata.goals.map(goal => <li>{goal}</li>)}
          </List>
        </div>
        <div style={{ margin: '0 2rem 0 5rem' }}>
          <Title>Possibilité d'accompagnement par des séances encadrées</Title>
          <Subheading>(sur le terrain ou à domicile)</Subheading>
          <List>
            {data.site.siteMetadata.sessions.map(session => <li>{session}</li>)}
          </List>
        </div>
      </Poster>
    </Container>
  </Layout>
);

export default DescriptionPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        goals
        sessions
      }
    }
    runningImage: file(relativePath: { eq: "running3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;