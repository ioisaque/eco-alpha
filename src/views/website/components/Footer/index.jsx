import React from 'react';
import { GlobalVars } from '~/styles/global';
import { Container, Item } from './styles';

export default function SocialBar() {
  return (
    <Container>
      <a href="https://isaquecosta.com.br"><img src="https://cdn.isaquecosta.com.br/marketing/copyright_dark.png"/></a>
      <img src={GlobalVars.img.ecoalpha}/>
      <div>
        <Item
          link="https://www.instagram.com/"
          icon={GlobalVars.img.instagram}
        />
        <Item link="https://www.facebook.com/" icon={GlobalVars.img.facebook} />
        <Item link="https://web.whatsapp.com/" icon={GlobalVars.img.whatsapp} />
      </div>
    </Container>
  );
}
