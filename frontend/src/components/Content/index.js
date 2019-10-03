import React from 'react';

import Card from './Cards'

import { Container } from './styles';

export default function Content() {
  return (
    <Container className="container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}
