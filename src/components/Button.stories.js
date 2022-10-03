import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const events = actions({ onclick: "Clicado" });

export const usage = () => <Button {...events}>Meu Botão</Button>;
