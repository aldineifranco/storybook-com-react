import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styles/GlobalStyle";
import { select } from "@storybook/addon-knobs";
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={select("Theme", ThemeNames, ThemeNames.light)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
));

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
