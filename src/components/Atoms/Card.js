import React from "react";
import PropTypes from "react";
import styled from "styled-components";

//#region CardBody

const StyledBody = styled.div`
  padding: 16px;

  h4 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  image: undefined,
};

CardBody.propTypes = {
  image: PropTypes.node,
};

//#endregion

//#region CardMedia

export const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.defaultProps = {
  image: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
};

//#endregion

//#region Card

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

//#endregion

export default Card;
