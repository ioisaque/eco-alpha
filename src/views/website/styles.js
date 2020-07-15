import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalVars } from '~/styles/global';

export const WhiteWrapper = styled.div`
  padding-top: 120px;
  margin: 0 !important;
  background-color: ${GlobalVars.color.light};
`;

export const BigIcon = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 0.7rem;
  background-color: ${GlobalVars.color.e_green};
`;

export const PhotoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export function TeamItem({ photo, name, p }) {
  return (
    <div className="col-md-4 col-sm-12 p-3">
      <PhotoWrapper>
        <img width="100%" className="p-3" src={photo} />
      </PhotoWrapper>
      <h2>{name}</h2>
      <p>{p}</p>
    </div>
  );
}

export const WebsiteStyles = createGlobalStyle`
  /* SOBRE NOS */
  .about-us {
    padding: 100px 0;
  }
  .about-us h1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 100px;
    text-transform: uppercase;
    color: ${GlobalVars.color.e_green};
  }
  .about-us h2 {
    font-size: 3rem;
    color: ${GlobalVars.color.black};
  }
  .about-us p {
    font-size: 2rem;
    padding: 50px 0;
    color: ${GlobalVars.color.dark};
  }

  /* TIME */
  .team {
    padding: 100px 0;
    background-color: ${GlobalVars.color.e_green};
  }
  .team h1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 100px;
    color: ${GlobalVars.color.white};
  }
  .team h2 {
    padding: 1rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 35px;
    color: ${GlobalVars.color.white};
  }
  .team p {
    font-size: 1.2rem;
    text-align: center;
    color: ${GlobalVars.color.white};
  }

  /* NAVBAR  */
  .nav-item .nav-link {
    font-weight: 600;
    text-transform: uppercase;
    color: ${GlobalVars.color.white};
  }
  .nav-item.active .nav-link{
    text-decoration: underline;
    text-underline-position: under;
  }
`;
