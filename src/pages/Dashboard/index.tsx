import React from 'react';

import Card from '../../components/Card';

import { Container } from './styles';

interface IDashboardProps {
  isDarkMode: boolean;
  onDarkMode(): void;
}

const Dashboard: React.FC<IDashboardProps> = ({
  isDarkMode,
  onDarkMode,
}: IDashboardProps) => {
  return (
    <Container>
      <Card isDarkMode={isDarkMode} onDarkMode={onDarkMode} />
    </Container>
  );
};

export default Dashboard;
