import React from 'react';
import { Button } from 'reactstrap';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { Wrapper, Container, BulletItem } from '~/styles/global';

import NavBar from '~/components/NavBar';
import Footer from '~/components/Footer';

export default function Contato() {
  const handleSubmit = (data) => {
    console.log('SUBMITED ==> ', data);
  };

  return (
    <Wrapper id="wrapper">
      <NavBar page="contato" />
      <Container id="container">
        <section className="contact">
          <div className="container">
            {/* MISSÃO */}
            <div className="row">
              <div className="col-md-6 col-sm-12 p-5">
                <h2>Ficou alguma dúvida?</h2>
                <p className="mb-5">
                  Nos mande um e-mail, ou entre em contato em um dos canais
                  abaixo!
                </p>

                <BulletItem icon="phone" text="(15) 9 9682 2628" />
                <BulletItem icon="mail" text="contato@ecoalpha.com.br" />
              </div>
              <div className="col-md-6 col-sm-12 p-5">
                <Form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    className="form-control"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="form-control"
                    required
                  />
                  <Input
                    type="text"
                    name="celular"
                    placeholder="Celular"
                    className="form-control"
                    required
                  />
                  <Textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    className="form-control"
                    required
                  />
                  <Button type="submit" className="btn btn-block">
                    ENVIAR
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
}
