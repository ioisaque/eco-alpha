import React from 'react';
import { GlobalVars } from '~/styles/global';
import { Container, Title, SubTitle, Button } from './styles';

export default function Banner() {
  return (
    <Container>
      <div>
        <Title>LOGO</Title>
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
  );
}
