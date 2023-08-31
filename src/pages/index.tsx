import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Infos from "../components/infos";
import { BLACK } from "../utils/colors";
import { useSiteMetadata } from "../utils/use-site-metadata"

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
  @media (max-width: 750px) {
    flex-basis: 50%;
  }
`;

const Home = () => {
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Container>
        <StaticImage
          src="../img/running3.jpg"
          alt="Running illustration"
          placeholder="blurred"
          style={{
            flexGrow: 1,
            flexBasis: "30%",
          }}
        />
        <StaticImage
          src="../img/blacklogo.jpg"
          alt="Black logo illustration"
          placeholder="blurred"
          style={{
            flexGrow: 2,
            flexBasis: "30%",
            margin: "auto 15%",
          }}
        />
      </Container>
      <TriptyqueContainer>
        <ImageContainer>
          <StaticImage
            src="../img/running2.jpg"
            alt="Running Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
        <ImageContainer>
          <StaticImage
            src="../img/swimming2.jpg"
            alt="Swimming Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
        <ImageContainer>
          <StaticImage
            src="../img/cycling2.jpg"
            alt="Cycling Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
      </TriptyqueContainer>
      <Infos />
    </Layout>
  );
};

export default Home;
