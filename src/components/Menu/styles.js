import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalVars } from '~/styles/global';

export const Container = styled.aside`
  width: 250px;
  height: 100%;
  position: fixed;
  background: ${GlobalVars.color.dark};
  border-right: 5px solid ${GlobalVars.color.danger};
`;

export const MobileContainer = styled.aside`
  width: 100%;
  height: auto;
  background: ${GlobalVars.color.dark};
`;

export const Logo = styled.img.attrs({
  src: GlobalVars.img.logo,
})`
  width: 100%;
  padding: 1.5rem 2rem;
  margin: 10px 0 30px;
`;

export const MenuStyles = createGlobalStyle`

  .menu-logo {
    width: 100%;
    padding: 2rem;
    margin: 10px 0 30px;
  }

  a.menu-item {
    width: 100%;
    height: 40px;
    padding: 3px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-weight: bold;
    text-decoration: none !important;

    background: transparent;
    color: ${GlobalVars.color.lightGrey};
  }

  a.menu-item:hover {
    color: ${GlobalVars.color.white};
    background: ${GlobalVars.color.danger};
  }

  a.menu-item i {
    padding: 5px;
    margin-right: 15px;
  }
`;

export function MenuItem({ icon, title, link, links }) {
  if (links)
    return (
      <div className="btn-group dropright">
        <a
          href={link}
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="mIcon">{icon}</i> {title}
        </a>
        <div className="dropdown-menu">
          {links.map((item) => (
            <a
              href={item.link}
              style={{
                width: '100%',
                height: '40px',
                color: GlobalVars.color.black,
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    );
  return (
    <a href={link} className="menu-item">
      <i className="mIcon">{icon}</i>
      {title}
    </a>
  );
}
