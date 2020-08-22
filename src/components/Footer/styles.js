import React from 'react';
import styled from 'styled-components';

import { GlobalVars } from '~/styles';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  padding: 50px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${GlobalVars.color.white};
`;

export function Item({ icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <i className={icon} />
    </a>
  );
}
