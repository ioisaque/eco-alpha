import React from 'react';
import { WebsiteStyles, WhiteWrapper, BigIcon } from './styles';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Oportunidades() {
  return (
    <WhiteWrapper>
      <WebsiteStyles />
      <NavBar page="oportunidades" />

      <section className="about-us">
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
              <BigIcon rocket />
            </div>
          </div>
          {/* VISÃO */}
          <div className="row">
            <div className="col-md-6 col-sm-12 p-5">
              <BigIcon rocket />
            </div>
            <div className="col-md-6 col-sm-12 p-5">
              <h2>Visão</h2>
              <p>
                Ser líder do mercado e referência no segmento da construção
                civil.
              </p>
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
              <BigIcon rocket />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </WhiteWrapper>
  );
}
