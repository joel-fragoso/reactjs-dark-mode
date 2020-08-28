import React from 'react';

import Button from '../Button';

import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <h1>Dark Mode is Disabled</h1>
      <Button type="button" onClick={() => {}}>
        Toggle Dark Mode
      </Button>
    </Container>
  );
};

export default Card;
