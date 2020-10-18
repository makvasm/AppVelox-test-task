import React, { useEffect, useState } from 'react';

import Header from '../components/Header.jsx';
import SideMenu from '../components/SideMenu.jsx';
import Container from '../components/styles/containers/Container';

export default function Profile() {
  document.title = 'Главная'

  return (
    <Container>
      <SideMenu />
      <Header title='Главная' />
    </Container>
  )
}
