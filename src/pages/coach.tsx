import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Infos from "../components/infos";
import { WHITE, BLACK, YELLOW } from "../utils/colors";
import { useSiteMetadata } from "../utils/use-site-metadata";

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
  const { title, description } = useSiteMetadata();
  return (
    <Layout>
      <Helmet>
        <title>{title} | Coach</title>
        <meta name="description" content={description} />
      </Helmet>
      <Container>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-block",
            width: 250,
            height: 300,
          }}
        >
          <StaticImage
            src="../img/Luc.jpg"
            alt="Luc Nahon"
            placeholder="blurred"
            width={250}
            style={{ flexShrink: 0 }}
          />
        </div>
        <Article>
          <Title>Luc Nahon</Title>
          <Text>
            Educateur sportif // Diplômé d'Etat DEJEPS
            <br />
            Entraîneur de triathlon, préparateur mental
          </Text>
          <br />
          <Text>
            Entraîneur GUC (Grenoble Université Club) section triathlon
            <br />
            Responsable formation et enseignant CNPC sport: running, diététique
            sportive, musculation, fitness...
            <br />
            Coaching de sportifs d'ultra distance en sport d'endurance
            <br />
            Finisher de plusieurs Ironman en Europe (Embrun, Zürich, Nice...)
          </Text>
        </Article>
      </Container>
      <TriptyqueContainer>
        <ImageContainer>
          <StaticImage
            src="../img/running.jpg"
            alt="Running Illustration"
            placeholder="blurred"
          />
        </ImageContainer>
        <ImageContainer>
          <StaticImage
            src="../img/swimming.jpg"
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

export default CoachPage;
