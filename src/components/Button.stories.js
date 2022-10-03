import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import { ThemeProvider } from "styled-components";

export default {
  title: "Components/Button",
  component: Button,
};

const events = actions({ onclick: "Clicado" });

const theme = {
  colorTertiary: "Tomato",
};

export const usage = () => (
  <ThemeProvider theme={theme}>
    <Button {...events}>Meu Botão</Button>
  </ThemeProvider>
);
