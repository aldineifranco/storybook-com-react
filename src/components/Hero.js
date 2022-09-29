import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

// const colorGreen = "#b1d34b";
const colorGreenLight = "#ebf4d2";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  @media (min-width: 768px) {
    padding: 0 16px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
    color: ${colorGreenLight};
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
  }
`;

// const Title = styled.h1`
//   position: relative;
//   font-weight: 700;
//   letter-spacing: 2px;
//   color: ${colorGreen};

//   margin-bottom: 25px;
//   padding-bottom: 25px;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);

//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -3px;
//     background-color: ${colorGreenLight};
//     height: 5px;
//     width: 70px;
//   }

// `;

const Hero = ({ image, children }) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.prototype = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
