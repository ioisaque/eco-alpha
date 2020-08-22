import React from 'react';
import Gallery from '~/components/Galeria';
import { Wrapper, Container, GlobalStyles } from '~/styles';

import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

export default function Galeria() {
  const PHOTO_SET = [
    {
      src: require('~/assets/img/16.jpg'),
      width: 16,
      height: 10,
    },
    {
      src: require('~/assets/img/18.jpeg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/19.jpeg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/20.jpeg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/17.jpeg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/2.png'),
      width: 16,
      height: 11,
    },
    {
      src: require('~/assets/img/7.jpg'),
      width: 10,
      height: 16,
    },
    {
      src: require('~/assets/img/8.jpg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/9.jpg'),
      width: 16,
      height: 9,
    },
    {
      src: require('~/assets/img/14.jpg'),
      width: 16,
      height: 9,
    },
    {
      src: require('~/assets/img/15.jpg'),
      width: 16,
      height: 9,
    },
    {
      src: require('~/assets/img/10.jpg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/11.jpg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/12.jpg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/13.jpg'),
      width: 10,
      height: 10,
    },
    {
      src: require('~/assets/img/1.png'),
      width: 16,
      height: 9,
    },
    {
      src: require('~/assets/img/3.jpg'),
      width: 16,
      height: 10,
    },
    {
      src: require('~/assets/img/4.jpg'),
      width: 16,
      height: 10,
    },
    {
      src: require('~/assets/img/5.jpg'),
      width: 16,
      height: 10,
    },
    {
      src: require('~/assets/img/6.jpg'),
      width: 16,
      height: 10,
    },
  ];

  return (
    <Wrapper id="wrapper">
      <GlobalStyles />
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
