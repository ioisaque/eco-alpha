import React from 'react';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const UserPhoto = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border: 1.5px solid #202124;
  border-radius: 100%;
`;

export function LoggedUser({ user }) {
  return (
    <a href={`/clientes/${user.id}`} className="btn">
      {user.fbid ? (
        <UserPhoto
          src={`https://graph.facebook.com/${user.fbid}/picture?type=large`}
        />
      ) : (
        <i className="mIcon">account_circle</i>
      )}
      {user.nome}
    </a>
  );
}
