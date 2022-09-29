import React from "react";

import Hero from "../components/Hero";
import GlobalStyle from "../components/GlobalStyle";

import BgImage01 from "./assets/GettyImages-1183506875.jpg";
import BgImage02 from "./assets/GettyImages-927402888.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgImage01}>
    <p>A auto escola lider em aprovação.</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir" image={BgImage02}>
    <ul>
      <li>is simply dummy text of the printing and typesetting industry.</li>
      <li>is simply dummy text of the printing and typesetting industry.</li>
      <li>is simply dummy text of the printing and typesetting industry.</li>
    </ul>
  </Hero>
);
