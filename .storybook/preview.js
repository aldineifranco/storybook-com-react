import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styles/GlobalStyle";
import ThemeProvider from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider>{storyFn()}</ThemeProvider>
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
