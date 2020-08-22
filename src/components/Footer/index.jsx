import React from 'react';
import { GlobalVars } from '~/styles';
import { Container, Item } from './styles';

export default function Footer() {
  return (
    <footer className="row">
      <Container className="col-md-4 col-sm-12">
        <a href="https://isaquecosta.com.br">
          <img
            src="https://cdn.isaquecosta.com.br/marketing/copyright_dark.png"
            alt="Desenvolvido por Isaque Costa"
          />
        </a>
      </Container>
      <Container className="col-md-4 col-sm-12">
        <img
          style={{ width: 'auto', maxHeight: '70px' }}
          alt="Eco Alpha"
          src={GlobalVars.img.logo}
        />
      </Container>
      <Container className="col-md-4 col-sm-12 social-links">
        <Item link="https://www.instagram.com/" icon="fa fa-instagram" />
        <Item link="https://www.facebook.com/" icon="fa fa-facebook-square" />
        <Item link="https://web.whatsapp.com/" icon="fa fa-whatsapp" />
      </Container>
    </footer>
  );
}
