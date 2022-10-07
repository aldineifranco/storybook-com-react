import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import Section from "../molecules/Section";
import Heading from "./Heading";
import Button from "./Button";

import imageCard from "../../stories/assets/empresa .jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h4>Título do Card</h4>
        </Heading>
        <p>is simply dummy text of the printing and typesetting industry.</p>
        <div>
          <Button variant="link" color="primary">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={imageCard} />
      <CardBody>
        <Heading>
          <h4>Título do Card</h4>
        </Heading>
        <p>is simply dummy text of the printing and typesetting industry.</p>
        <div>
          <Button variant="link" color="primary">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
