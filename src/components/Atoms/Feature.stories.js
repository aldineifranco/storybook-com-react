import React from "react";
import {
  FaCloudsmith,
  FaConnectdevelop,
  FaGitter,
  FaXbox,
} from "react-icons/fa";
import Feature from "./Feature";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCloudsmith />} title="Maior plano de saúde">
    <p> is simply dummy text of the printing and typesetting industry.</p>
  </Feature>
);

export const withGrid = () => (
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
);
