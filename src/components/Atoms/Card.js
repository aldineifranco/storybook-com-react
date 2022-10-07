import React from "react";
import PropTypes from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
`;

const StyledBody = styled.div`
  padding: 16px;

  h4 {
    margin-top: 0;
  }
`;

export const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  image: undefined,
};

CardBody.propTypes = {
  image: PropTypes.node,
};

export const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.defaultProps = {
  image: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
};

const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
