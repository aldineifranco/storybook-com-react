import React from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

const theme = {
  colorPrimary: "#ffc107",
};

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
);

export default ThemeProvider;
