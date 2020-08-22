import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { GlobalVars } from '~/styles';

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
        <Link className="nav-link" to={link}>
          {title} <span className="sr-only">(current)</span>
        </Link>
      </li>
    );
  return (
    <li className="nav-item">
      <Link className="nav-link" to={link}>
        {title}
      </Link>
    </li>
  );
}

export const FancyStyles = createGlobalStyle`
	.navbar-collapse.show {
		padding: 1rem;
		transition-duration: .2s;
		background: ${GlobalVars.color.e_green};
	}
`;
