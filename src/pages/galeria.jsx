import React from 'react';
import Gallery from '~/components/Galeria';
import { Wrapper, Container } from '~/styles/global';

import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

export default function Galeria() {
  const PHOTO_SET = [
    {
      src: 'https://ecoalpha.com.br/static/media/cube_bg.84dfc48f.svg',
      width: 4,
      height: 3,
    },
    {
      src: 'https://ecoalpha.com.br/static/media/cube_bg.84dfc48f.svg',
      width: 4,
      height: 3,
    },
    {
      src: 'https://ecoalpha.com.br/static/media/cube_bg.84dfc48f.svg',
      width: 4,
      height: 3,
    },
    {
      src: 'https://ecoalpha.com.br/static/media/cube_bg.84dfc48f.svg',
      width: 4,
      height: 3,
    },
    {
      src: 'https://ecoalpha.com.br/static/media/cube_bg.84dfc48f.svg',
      width: 4,
      height: 3,
    },
    {
      src: 'https://ecoalpha.com.br/static/media/cube_bg.84dfc48f.svg',
      width: 4,
      height: 3,
    },
  ];

  return (
    <Wrapper id="wrapper">
      <NavBar page="galeria" />
      <Container id="container">
        <section className="container gallery">
          <Gallery photos={PHOTO_SET} />
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
}
