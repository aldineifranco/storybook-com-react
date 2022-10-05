import React from "react";
import Grid from "./Grid";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Grid",
  component: Grid,
};

const Box = styled.div`
  height: 200px;
  background-color: indigo;
`;

export const usage = () => (
  <Grid>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </Grid>
);
