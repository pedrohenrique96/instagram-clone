import React from "react";

import Card from "./Cards";
import Icon from "./Icon";

import { Container } from "./styles";

export default function Content() {
  return (
    <Container className="container">
      <Icon />
      <Card />
      <Card />
    </Container>
  );
}
