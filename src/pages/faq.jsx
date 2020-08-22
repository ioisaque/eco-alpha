import React from 'react';
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap';
import { Wrapper, Container, GlobalStyles } from '~/styles';

import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

export default function Faq() {
  return (
    <Wrapper id="wrapper">
      <GlobalStyles />
      <NavBar page="faq" />
      <Container id="container">
        <section className="faq">
          <div className="container">
            <span id="question1">O que é a Ecoalpha?</span>
            <UncontrolledCollapse toggler="#question1">
              <Card>
                <CardBody>
                  A Ecoalpha é uma empresa no segmento da construção civil que
                  atua intermediando serviços entre cliente e prestador.
                  <br />
                  Trabalhamos somente com profissionais selecionador a partir de
                  diversos critérios e com amplo conhecimento no mercado de
                  atuação.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <span id="question2">Posso ser prestador da Ecoalpha?</span>
            <UncontrolledCollapse toggler="#question2">
              <Card>
                <CardBody>
                  Qualquer profissional que possua amplo conhecimento no mercado
                  em que atua pode ser um parceiro da Ecoalpha, contanto que
                  prove de fato conhecimento e habilidade naquilo que está
                  disposto a fazer.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <span id="question3">Qual a vantagem de contratar a Ecoalpha?</span>
            <UncontrolledCollapse toggler="#question3">
              <Card>
                <CardBody>
                  Diferente de outras empresas ou prestadores de serviço, a
                  Ecoalpha oferece garantia de todo serviço prestado, desde o
                  mais simples aos mais complexos.
                  <br />
                  Tudo previamente acordado em acordado em contrato.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </div>
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
}
