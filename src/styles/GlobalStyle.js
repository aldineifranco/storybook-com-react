import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const colorGreenLight = "#ebf4d2";

const GlobalStyle = createGlobalStyle`
html {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
    box-sizing: border-box;
}


 *, *:before, *:after {
  box-sizing: inherit;
 }

 body{
  margin: 0
 }

h1, h2, h3, h4, h5, h6 {
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 2px;

      strong {
    color: ${colorGreenLight};
  }
}

h1 {
    font-size: 2.5rem;

    @media (min-width: 992px) {
        font-size: 3.75;
    }
}

h2 {
    font-size: 2rem;

        @media (min-width: 992px) {
        font-size: 3.125;
    }
}

h3 {
    font-size: 1.9rem;

        @media (min-width: 992px) {
        font-size: 2.5;
    }
}

h4 {
    font-size: 1.3rem;
    font-weight: 600;

        @media (min-width: 992px) {
        font-size: 2.125;
    }
}

h5 {
    font-size: 1.2rem;
    font-weight: 600;

        @media (min-width: 992px) {
        font-size: 1.5;
    }
}

h6 {
    font-size: 1.1rem;
    font-weight: 600;

        @media (min-width: 992px) {
        font-size: 1.25;
    }
}
`;

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
);

export default GlobalStyleComposed;
