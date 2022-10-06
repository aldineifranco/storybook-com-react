import React from "react";
// import PropTypes from "prop-types";

import Hero from "../molecules/Hero";
import Heading from "../Atoms/Heading";
import Button from "../Atoms/Button";
import BgImage02 from "../../stories/assets/GettyImages-927402888.jpg";
import {
  FaCloudsmith,
  FaConnectdevelop,
  FaGitter,
  FaXbox,
} from "react-icons/fa";
import Feature from "../Atoms/Feature";
import Grid from "../Atoms/Grid";
import Section from "../molecules/Section";
import videoNuvens from "../../../src/assets/video.mp4";

const Home = () => (
  <>
    <Hero image={BgImage02}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br /> para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>is simply dummy text of the printing and typesetting industry.</li>
        <li>is simply dummy text of the printing and typesetting industry.</li>
        <li>is simply dummy text of the printing and typesetting industry.</li>
      </ul>
      <Button color="primary" variant="outlined">
        Aproveite
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCloudsmith />} title="Maior plano de saúde">
          <p> is simply dummy text of the printing and typesetting industry.</p>
        </Feature>
        <Feature icon={<FaConnectdevelop />} title="Para toda a família">
          <p> is simply dummy text of the printing and typesetting industry.</p>
        </Feature>
        <Feature icon={<FaGitter />} title="Melhor cobertura da região">
          <p> is simply dummy text of the printing and typesetting industry.</p>
        </Feature>
        <Feature icon={<FaXbox />} title="550 Cooperados">
          <p> is simply dummy text of the printing and typesetting industry.</p>
        </Feature>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>

    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Outro título com vídeo</h2>
          </Heading>

          <p>
            is simply dummy text of the printing and typesetting industry is
            simply dummy text of the printing and typesetting industry is simply
            dummy text of the printing and typesetting industry.
          </p>

          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={videoNuvens} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
