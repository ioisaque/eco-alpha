import React from 'react';
import Gallery from './components/Galeria';
import { WebsiteStyles, Wrapper, Container } from './styles';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Galeria() {
  const PHOTO_SET = [
    {
      src: 'http://ecoalpha.com.br/wp-content/uploads/2019/02/IMG_0193.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'http://ecoalpha.com.br/wp-content/uploads/2019/02/IMG_0172.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'http://ecoalpha.com.br/wp-content/uploads/2019/02/IMG_0165.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'http://ecoalpha.com.br/wp-content/uploads/2019/02/IMG_0164.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'http://ecoalpha.com.br/wp-content/uploads/2019/02/IMG_0161.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'http://ecoalpha.com.br/wp-content/uploads/2019/02/IMG_0155.jpg',
      width: 4,
      height: 3,
    },
  ];

  return (
    <Wrapper>
      <WebsiteStyles />
      <NavBar page="galeria" />
      <Container>
        <section className="container gallery">
          <Gallery photos={PHOTO_SET} />
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
}
