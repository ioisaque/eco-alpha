import React from 'react';
import { isMobile } from 'react-device-detect';
import {
  MenuStyles,
  Container,
  MobileContainer,
  Logo,
  MenuItem,
} from './styles';

export function MenuItems() {
  return (
    <>
      <MenuItem icon="dashboard" title="Dashboard" link="/login/listar" />
      <MenuItem icon="people_alt" title="Clientes" link="/clientes/listar" />
      <MenuItem icon="contacts" title="Clientes" link="/clientes/listar" />
      {/* <MenuItem
          icon="people_alt"
          title="Clientes"
          links={[
            { title: 'Novo Usuário', link: '/clientes/add' },
            { title: 'Listar Clientes', link: '/clientes' },
          ]}
        /> */}
    </>
  );
}

export default function Menu() {
  if (isMobile)
    return (
      <>
        <MenuStyles />
        <MobileContainer>{MenuItems()}</MobileContainer>
      </>
    );
  return (
    <>
      <MenuStyles />
      <Container>
        <Logo />
        {MenuItems()}
      </Container>
    </>
  );
}
