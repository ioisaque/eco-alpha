import React from 'react';
import styled from 'styled-components';

import { GlobalVars } from '~/styles/global';

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  z-index: 1000;
  position: fixed;
  background: ${GlobalVars.color.e_green};
`;

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${GlobalVars.color.e_green};
`;

export function NavItem({ title, active, link }) {
  if (active)
    return (
      <li className="nav-item active">
        <a className="nav-link" href={link}>
          {title} <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  return (
    <li className="nav-item">
      <a className="nav-link" href={link}>
        {title}
      </a>
    </li>
  );
}
