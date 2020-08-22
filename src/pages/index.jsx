import React from 'react';
import {
  GlobalVars,
  Wrapper,
  Container,
  BigIcon,
  TeamItem,
  FaleConosco,
  GlobalStyles,
} from '~/styles';

import NavBar from '~/components/NavBar';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';

const Fotos = {
  telhado: require('~/assets/img/telhado.jpg'),
  calhas: require('~/assets/img/calhas.jpg'),
  pintura: require('~/assets/img/pintura.jpg'),
  encanamento: require('~/assets/img/encanamento.jpg'),
  alvenaria: require('~/assets/img/alvenaria.jpg'),
  eletrica: require('~/assets/img/eletrica.jpg'),
};

export default function Home() {
  return (
    <Wrapper id="wrapper">
      <GlobalStyles />
      <NavBar page="home" />
      <Container id="container">
        <Banner />
        <section className="about-us">
          <h1>Sobre Nós</h1>
          <div className="container">
            {/* MISSÃO */}
            <div className="row">
              <div className="col-md-6 col-sm-12 p-5">
                <h2>Missão</h2>
                <p>
                  Oferecer aos associados maior rentabilidade e novas
                  oportunidades de negócio.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 p-5">
                <BigIcon photo={GlobalVars.icon.rocket} />
              </div>
            </div>
            {/* VISÃO */}
            <div className="row">
              <div className="col-md-6 col-sm-12 p-5">
                <h2>Visão</h2>
                <p>
                  Ser líder do mercado e referência no segmento da construção
                  civil.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 order-md-first p-5">
                <BigIcon photo={GlobalVars.icon.eye} />
              </div>
            </div>
            {/* VALORES */}
            <div className="row">
              <div className="col-md-6 col-sm-12 p-5">
                <h2>Valores</h2>
                <p>
                  Meritocracia;
                  <br />
                  Responsabilidade;
                  <br />
                  Honestidade;
                  <br />
                  Paixão;
                </p>
              </div>
              <div className="col-md-6 col-sm-12 p-5">
                <BigIcon photo={GlobalVars.icon.checklist} />
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <h1>Nossos Serviços</h1>
          <div className="container">
            {/* MISSÃO */}
            <div className="row">
              <TeamItem
                name="Telhado"
                photo={Fotos.telhado}
                // p="Carpinteiro."
              />
              <TeamItem
                name="Calhas"
                photo={Fotos.calhas}
                // p="Eletricista."
              />
              <TeamItem
                name="Pintura"
                photo={Fotos.pintura}
                // p="Pintora."
              />
              <TeamItem
                name="Encanamento"
                photo={Fotos.encanamento}
                // p="Engenheiro Civil."
              />
              <TeamItem
                name="Alvenaria"
                photo={Fotos.alvenaria}
                // p="Engenheira Civil."
              />
              <TeamItem
                name="Elétrica"
                photo={Fotos.eletrica}
                // p="Design de interiores."
              />
              <FaleConosco>
                <i className="fa fa-whatsapp mr-3" />
                Fale Conosco!
              </FaleConosco>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
}
