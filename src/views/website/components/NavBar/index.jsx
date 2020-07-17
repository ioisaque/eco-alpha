import React from 'react';
import SocialBar from '../SocialBar';
import { Wrapper, Container, NavItem, FancyStyles } from './styles';

export default function NavBar({ page }) {
  return (
    <Wrapper>
      <SocialBar />
      <FancyStyles />
      <Container>
        <nav className="navbar navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mIcon navbar-toggler-icon">menu</i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <NavItem title="Início" link="/" active={page === 'home'} />
              <NavItem
                title="Oportunidades"
                link="/oportunidades"
                active={page === 'oportunidades'}
              />
              <NavItem
                title="Galeria"
                link="/galeria"
                active={page === 'galeria'}
              />
              <NavItem title="FAQ" link="/faq" active={page === 'faq'} />
              <NavItem
                title="Contato"
                link="/contato"
                active={page === 'contato'}
              />
            </ul>
          </div>
        </nav>
      </Container>
    </Wrapper>
  );
}
