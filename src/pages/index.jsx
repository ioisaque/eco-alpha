import React from 'react';
import {
  GlobalVars,
  Wrapper,
  Container,
  BigIcon,
  TeamItem,
  FaleConosco,
} from '~/styles/global';

import NavBar from '~/components/NavBar';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';

export default function Home() {
  return (
    <Wrapper id="wrapper">
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
          <h1>Quer fazer parte do nosso time?</h1>
          <div className="container">
            {/* MISSÃO */}
            <div className="row">
              <TeamItem
                name="Isaque Costa"
                photo="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-1/p200x200/69461404_2596098667108981_2852688798075060224_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=HB8ibFJF-W0AX8Rcmzo&_nc_ht=scontent.fipn6-1.fna&_nc_tp=6&oh=fa40b4c69eae0ab83f3511e26035e017&oe=5F343F13"
                p="Fulll Stack Developer."
              />
              <TeamItem
                name="Isaque Costa"
                photo="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-9/83856551_103181677928350_4498881541371330560_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=AG1aA5AriYgAX-8kOph&_nc_ht=scontent.fipn6-1.fna&oh=9bcce4cc5fbb6a911f1132e8ad076991&oe=5F3441C0"
                p="Fulll Stack Developer."
              />
              <TeamItem
                name="Isaque Costa"
                photo="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-1/p200x200/69461404_2596098667108981_2852688798075060224_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=HB8ibFJF-W0AX8Rcmzo&_nc_ht=scontent.fipn6-1.fna&_nc_tp=6&oh=fa40b4c69eae0ab83f3511e26035e017&oe=5F343F13"
                p="Fulll Stack Developer."
              />
              <TeamItem
                name="Isaque Costa"
                photo="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-1/p200x200/69461404_2596098667108981_2852688798075060224_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=HB8ibFJF-W0AX8Rcmzo&_nc_ht=scontent.fipn6-1.fna&_nc_tp=6&oh=fa40b4c69eae0ab83f3511e26035e017&oe=5F343F13"
                p="Fulll Stack Developer."
              />
              <TeamItem
                name="Isaque Costa"
                photo="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-9/83856551_103181677928350_4498881541371330560_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=AG1aA5AriYgAX-8kOph&_nc_ht=scontent.fipn6-1.fna&oh=9bcce4cc5fbb6a911f1132e8ad076991&oe=5F3441C0"
                p="Fulll Stack Developer."
              />
              <TeamItem
                name="Isaque Costa"
                photo="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-1/p200x200/69461404_2596098667108981_2852688798075060224_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=HB8ibFJF-W0AX8Rcmzo&_nc_ht=scontent.fipn6-1.fna&_nc_tp=6&oh=fa40b4c69eae0ab83f3511e26035e017&oe=5F343F13"
                p="Fulll Stack Developer."
              />
              <FaleConosco>
                <img
                  className="mr-3"
                  src={GlobalVars.icon.whatsapp}
                  alt="Fale Conosco!"
                />
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
