import React from 'react';

import Button from '../Button';

import { Container } from './styles';

interface ICardProps {
  isDarkMode: boolean;
  onDarkMode(): void;
}

const Card: React.FC<ICardProps> = ({ isDarkMode, onDarkMode }: ICardProps) => {
  return (
    <Container>
      <h1>Dark Mode is {isDarkMode ? 'Enabled' : 'Disabled'}</h1>
      <Button type="button" onClick={onDarkMode}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </Button>
    </Container>
  );
};

export default Card;
