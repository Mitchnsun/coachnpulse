import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Triptyque from '../components/triptyque';
import Infos from '../components/infos';
import { BLACK } from '../utils/colors';

const Container = styled.div`
  display: flex;
  background: ${BLACK};
  align-items: center;
`;

const LogoContainer = styled(props => <Img {...props} />)`
  flex-grow: 2;
  flex-basis: 30%;
  margin: auto 15%;
`;
const Image = styled(props => <Img {...props} />)`
  flex-grow: 1;
  flex-basis: 30%;
`;

const Home = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>
    <Container>
      <Image fluid={data.runningImage.childImageSharp.fluid} />
      <LogoContainer fluid={data.logoImage.childImageSharp.fluid} loading="eager" />
    </Container>
    <Triptyque images={[
      data.runningImage2.childImageSharp.fluid,
      data.swimImage.childImageSharp.fluid,
      data.cycleImage.childImageSharp.fluid
    ]}/>
    <Infos />
  </Layout>
);

export default Home;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    logoImage: file(relativePath: { eq: "blacklogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    runningImage: file(relativePath: { eq: "running3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    runningImage2: file(relativePath: { eq: "running2.jpg" }) {
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
    cycleImage: file(relativePath: { eq: "cycling2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
