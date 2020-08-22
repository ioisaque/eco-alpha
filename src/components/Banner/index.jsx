import React from 'react';
import { BackgroundImage, Container, Logo, SubTitle, Button } from './styles';

export default function Banner() {
  return (
    <BackgroundImage>
      <Container>
        <div>
          <Logo />
          <SubTitle>O melhor do mercado!</SubTitle>
          <Button>
            <i className="fa fa-whatsapp mr-3" />
            Vamos conversar?
          </Button>
        </div>
      </Container>
    </BackgroundImage>
  );
}
