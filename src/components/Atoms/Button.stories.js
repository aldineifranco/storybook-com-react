import React from "react";
import { actions } from "@storybook/addon-actions";
import Button from "./Button";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const events = actions({ onClick: "Clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

export const usage = () => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button {...events}>Default</Button>
      <Button color="primary" {...events}>
        Primary
      </Button>
      <Button color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button disabled {...events}>
        Default
      </Button>
      <Button color="primary" disabled {...events}>
        Primary
      </Button>
      <Button color="danger" disabled {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button variant="outlined" {...events}>
        Default
      </Button>
      <Button color="primary" variant="outlined" {...events}>
        Primary
      </Button>
      <Button color="danger" variant="outlined" {...events}>
        Danger
      </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button disabled variant="outlined" {...events}>
        Default
      </Button>
      <Button color="primary" disabled variant="outlined" {...events}>
        Primary
      </Button>
      <Button color="danger" disabled variant="outlined" {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled</p>
    <Toolbar>
      <Button variant="link" {...events}>
        Default
      </Button>
      <Button color="primary" variant="link" {...events}>
        Primary
      </Button>
      <Button color="danger" variant="link" {...events}>
        Danger
      </Button>
    </Toolbar>

    <p>Disabled</p>
    <Toolbar>
      <Button disabled variant="link" {...events}>
        Default
      </Button>
      <Button color="primary" disabled variant="link" {...events}>
        Primary
      </Button>
      <Button color="danger" disabled variant="link" {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
);
