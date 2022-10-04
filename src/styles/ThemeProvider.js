import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const ThemeNames = {
  light: "light",
  ocean: "ocean",
};

const light = {
  colors: {
    primary: {
      main: "#40B385",
      dark: "#c79100",
      lightGreen: "#ebf4d2",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
  },
};

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff",
      },
    },
  },
};

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "light",
};

export default ThemeProvider;
