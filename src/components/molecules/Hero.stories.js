import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import BgImage01 from "../../stories/assets/GettyImages-1183506875.jpg";
import BgImage02 from "../../stories/assets/GettyImages-927402888.jpg";
import Heading from "../Atoms/Heading";
import Button from "../Atoms/Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgImage01}>
    <Heading>
      <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
      <p>{text("Text", "A auto escola lider em aprovação.")}</p>
    </Heading>
  </Hero>
);

export const withList = () => (
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
);
