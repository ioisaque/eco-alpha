import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalVars } from '~/styles/global';

export const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderStyles = createGlobalStyle`

  a.header-link {
    width: auto;
    height: 40px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-weight: 400;
    text-decoration: none !important;

    color: ${GlobalVars.color.white};
  }

  a.header-link:hover {
    color: ${GlobalVars.color.lightGrey};
  }

  a.header-link i {
    padding: 5px;
    margin-right: 3px;
  }
`;

export function LoggedUser({ user }) {
  return (
    <a href={`/clientes/${user.id}`} className="header-link">
      {user.photo ? (
        <i className="mIcon">account</i>
      ) : (
        <i className="mIcon">account_circle</i>
      )}
      {user.nome}
    </a>
  );
}
