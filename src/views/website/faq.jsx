import React from 'react';
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap';
import { WebsiteStyles, Wrapper, Container } from './styles';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Faq() {
  return (
    <Wrapper>
      <WebsiteStyles />
      <NavBar page="faq" />
      <Container>
        <section className="faq">
          <div className="container">
            <span id="question1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit?
            </span>
            <UncontrolledCollapse toggler="#question1">
              <Card>
                <CardBody>
                  Nesciunt magni, voluptas debitis similique porro a molestias
                  consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <span id="question2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit?
            </span>
            <UncontrolledCollapse toggler="#question2">
              <Card>
                <CardBody>
                  Nesciunt magni, voluptas debitis similique porro a molestias
                  consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
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
