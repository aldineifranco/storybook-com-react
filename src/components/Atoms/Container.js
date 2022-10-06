import PropTypes from "prop-types";
import styled from "styled-components";

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

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
