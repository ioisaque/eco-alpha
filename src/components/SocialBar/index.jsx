import React from 'react';
import { Container, Item } from './styles';

export default function SocialBar() {
  return (
    <Container className="social-links">
      <Item link="https://www.instagram.com/" icon="fa fa-instagram" />
      <Item link="https://www.facebook.com/" icon="fa fa-facebook-square" />
      <Item link="https://web.whatsapp.com/" icon="fa fa-whatsapp" />
    </Container>
  );
}
