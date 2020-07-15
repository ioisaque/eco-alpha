import React from 'react';
import { GlobalVars } from '~/styles/global';
import { BackgroundImage, Container, Logo, SubTitle, Button } from './styles';

export default function Banner() {
  return (
    <BackgroundImage>
      <Container>
        <div>
          <Logo />
          <SubTitle>SLOGAN</SubTitle>
          <Button>
            <img
              className="mr-3"
              src={GlobalVars.icon.whatsapp}
              alt="Vamos conversar?"
            />
            Vamos conversar?
          </Button>
        </div>
      </Container>
    </BackgroundImage>
  );
}
