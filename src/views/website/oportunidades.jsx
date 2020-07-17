import React from 'react';
import { ImageFluid } from '~/styles/global';
import { WebsiteStyles, Wrapper, Container } from './styles';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Oportunidades() {
  return (
    <Wrapper>
      <WebsiteStyles />
      <NavBar page="oportunidades" />
      <Container>
        <section className="team single">
          <div className="container">
            {/* MISSÃO */}
            <div className="row">
              <div className="col-md-6 col-sm-12 p-5">
                <h2>Isaque Costa</h2>
                <p>
                  Oferecer aos associados maior rentabilidade e novas
                  oportunidades de negócio.
                </p>
              </div>
              <div className="col-md-6 col-sm-12 p-5">
                <ImageFluid src="https://scontent.fipn6-1.fna.fbcdn.net/v/t1.0-1/p200x200/69461404_2596098667108981_2852688798075060224_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=HB8ibFJF-W0AX8Rcmzo&_nc_ht=scontent.fipn6-1.fna&_nc_tp=6&oh=fa40b4c69eae0ab83f3511e26035e017&oe=5F343F13" />
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
}
