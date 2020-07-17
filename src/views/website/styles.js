import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GlobalVars } from '~/styles/global';

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 !important;
  background-color: ${GlobalVars.color.white};
`;

export const Container = styled.div`
  min-height: 100%;
  padding: 120px 0;
  margin: 0 0 -120px 0;
  background-color: ${GlobalVars.color.lightGrey};
`;

export const FaleConosco = styled.button`
  display: block;
  margin: 5rem auto 0;

  font-size: 2rem;
  font-weight: 500;
  padding: 15px 50px;
  color: ${GlobalVars.color.white};

  border: 2px solid ${GlobalVars.color.white};
  border-radius: 1rem;
  background: ${GlobalVars.color.e_green};
`;

export const BigIconWrapper = styled.div`
  width: 100%;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  background-color: ${GlobalVars.color.e_green};
`;

export function BigIcon({ photo }) {
  return (
    <BigIconWrapper>
      <img width="35%" src={photo} alt="Big Icon" />
    </BigIconWrapper>
  );
}

export const PhotoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export function TeamItem({ photo, name, p }) {
  return (
    <div className="col-md-4 col-sm-12 p-3">
      <PhotoWrapper>
        <img width="100%" className="p-3" src={photo} alt={name} />
      </PhotoWrapper>
      <h2>{name}</h2>
      <p>{p}</p>
    </div>
  );
}

export const BulletContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export function BulletItem({ icon, text }) {
  return (
    <BulletContainer>
      <i className="mIcon mr-2">{icon}</i> {text}
    </BulletContainer>
  );
}

export const WebsiteStyles = createGlobalStyle`
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    background: ${GlobalVars.color.white};
  }

  section {
    padding: 100px 0;
  }

  /* SOBRE NOS */
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
    color: ${GlobalVars.color.white};
    background-color: ${GlobalVars.color.e_green};
  }
  .team.single {
    padding: 100px 0;
    color: ${GlobalVars.color.black};
    background-color: ${GlobalVars.color.lightGrey};
  }
  .team h1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 100px;
  }
  .team h2 {
    padding: 1rem;
    font-weight: 300;
    text-align: center;
    margin-bottom: 35px;
  }
  .team p {
    font-size: 1.2rem;
    text-align: center;
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
  .navbar-toggler {
    color: ${GlobalVars.color.white}
  }

  /* GALERIA  */
  .gallery{
    padding: 50px 0;
  }

  /* FAQ  */
  .faq span {
    width: 100%;
    display: block;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-top: 1rem;
    color: ${GlobalVars.color.white};
    background: ${GlobalVars.color.neutral};
  }
  .faq .card {
    margin: 0;
  }

  /* CONTATO  */
  .form-control {
    margin: 1rem 0;
  }
`;
