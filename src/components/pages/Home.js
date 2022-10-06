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
      <Grid>
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
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
