import React from 'react';
import styled from 'styled-components';

import { GlobalVars } from '~/styles/global';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${GlobalVars.color.white};
`;

const Icon = styled.img`
  width: auto;
  height: 60px;
  padding: 15px 10px;
`;

export function Item({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon src={icon} />
    </a>
  );
}
