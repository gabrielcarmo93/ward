import React from 'react'
import WardButton from '../../components/WardButton'
import Map from '../../components/Map'

import { Container, WelcomeTitle } from './styles';

export default function Home() {
  return (
    <Container>
      <Map />
      <WardButton />
    </Container>
  );
}

