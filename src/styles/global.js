// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalVars = {
  baseDIR: 'https://hi.isaquecosta.com.br/',

  color: {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
    black: '#000000',
    white: '#FFFFFF',
    orange: '#fd7e14',
    gold: '#FFD440',

    darkBlue: '#133d63',
    lightGrey: '#E7E7E7',

    // Bootstrap
    info: '#0076f3',
    danger: '#FF5356',
    success: '#33CC66',
    warning: '#FFD000',
    neutral: '#7e7f80',

    dark: '#202124',
    light: '#f1f1f1',

    darker: '#00000077',
    veryLight: '#ffffff66',

    // CLiente
    e_green: '#5C904A',

    transparent: 'transparent',
  },

  img: {
    ecoalpha: require('~/assets/img/logo.png'),

    logo: require('~/assets/svg/logo_ideyou.svg'),
    cube_bg: require('~/assets/svg/cube_bg.svg'),

    instagram: require('~/assets/svg/instagram.svg'),
    facebook: require('~/assets/svg/facebook.svg'),
    whatsapp: require('~/assets/svg/whatsapp.svg'),
  },

  icon: {
    rocket: require('~/assets/icon/rocket.svg'),
    eye: require('~/assets/icon/eye.svg'),
    checklist: require('~/assets/icon/checklist.svg'),
    whatsapp: require('~/assets/icon/whatsapp.svg'),
  },

  banner: {
    one: require('~/assets/img/banner1.jpg'),
    two: require('~/assets/img/banner1.jpg'),
    three: require('~/assets/img/banner1.jpg'),
  },
};

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");
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
    color: ${GlobalVars.color.black};
    -webkit-font-smoothing: antialiased;
    background: ${GlobalVars.color.white};
  }

  #root {
    width: 100%;
    height: 100%;
    background: url(${GlobalVars.img.cube_bg}) center top no-repeat;
    background-size: auto 100%;
  }

  body, label, input, button {
    font-weight: 400;
    font: 'Poppins', sans-serif !important;
    color: ${GlobalVars.color.neutral};
  }

  a, select, button {
    cursor: pointer;
  }

  /* fallback */
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v51/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }

  i.mIcon {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 150%;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  /* btn Buttons */
  .btn {
    padding: 0.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    text-decoration: none !important;
  }

  .btn i {
    padding: 5px;
  }

  /* Form Defaults */
  .card {
    margin: 10px 0;
    border: none;
    border-radius: 0;
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

  footer {
    margin: 0 !important;
  }
`;

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

export function ImageFluid({ width, height, src, ...rest }) {
  return (
    <div style={{ width, height, overflow: 'hidden' }}>
      <img src={src} alt="Eco Alpha" {...rest} />
    </div>
  );
}
