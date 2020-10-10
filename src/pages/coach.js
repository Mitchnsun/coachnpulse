import React from 'react'
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Triptyque from '../components/triptyque';
import Infos from '../components/infos';
import { WHITE, BLACK, YELLOW } from '../utils/colors';

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

const Image = styled(props => <Img {...props} />)`
  flex-shrink: 0;
  width: 250px;
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

const CoachPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title} | Coach</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Container>
      <Image fixed={data.coachImage.childImageSharp.fixed} />
      <Article>
        <Title>Luc Nahon</Title>
        <Text>
          Educateur sportif // Diplômé d'Etat DEJEPS, entraîneur de triathlon
        </Text>
        <br/>
        <Text>
          Entraîneur GUC (Grenoble Université Club) section triathlon
          <br/> Responsable formation et enseignant CNPC sport: running, diététique sportive, musculation, fitness...
          <br/> Coaching de sportifs d'ultra distance en sport d'endurance
          <br/> Finisher de plusieurs Ironman en Europe (Embrun, Zürich, Nice...)
        </Text>
      </Article>
    </Container>
    <Triptyque images={[
      data.runningImage.childImageSharp.fluid,
      data.swimImage.childImageSharp.fluid,
      data.cycleImage.childImageSharp.fluid
    ]} />
    <Infos />
  </Layout>
);

export default CoachPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    runningImage: file(relativePath: { eq: "running.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    swimImage: file(relativePath: { eq: "swimming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cycleImage: file(relativePath: { eq: "cycling2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    coachImage: file(relativePath: { eq: "Luc.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 300, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
