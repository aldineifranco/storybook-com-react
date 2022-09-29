import React from "react";

import Hero from "../components/Hero";

import BgImage01 from "./assets/GettyImages-1183506875.jpg";
import BgImage02 from "./assets/GettyImages-927402888.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgImage01}>
    <h1>Ganhe sua liberdade para ir e vir</h1>
    <p>A auto escola lider em aprovação.</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgImage02}>
    <h1>
      Ganhe sua <strong>liberdade</strong>
      <br /> para ir e vir
    </h1>
    <ul>
      <li>is simply dummy text of the printing and typesetting industry.</li>
      <li>is simply dummy text of the printing and typesetting industry.</li>
      <li>is simply dummy text of the printing and typesetting industry.</li>
    </ul>
  </Hero>
);
