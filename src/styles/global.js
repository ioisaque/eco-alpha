// import 'bootstrap/dist/css/bootstrap.min.css';
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
    veryLight: '#ffffff66',

    // CLiente
    e_green: '#5C904A',

    transparent: 'transparent',
  },

  img: {
    ecoalpha: require('~/assets/img/logo_sm.png'),

    logo: require('~/assets/svg/logo_ideyou.svg'),
    cube_bg: require('~/assets/svg/cube_bg.svg'),

    instagram: require('~/assets/svg/instagram.svg'),
    facebook: require('~/assets/svg/facebook.svg'),
    whatsapp: require('~/assets/svg/whatsapp.svg'),
  },

  icon: {
    whatsapp: require('~/assets/icon/whatsapp.svg'),
  },

  banner: {
    one: require('~/assets/img/banner1.jpg'),
    two: require('~/assets/img/banner1.jpg'),
    three: require('~/assets/img/banner1.jpg'),
  },
};

export const LoginForm = styled.div`
  max-width: 350px;
  margin: 0 auto;
  padding: 0 20px 50px;
  height: auto !important;
  background-color: ${GlobalVars.color.dark};
`;

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

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
    background: linear-gradient(110deg, ${GlobalVars.color.success} 60%, ${GlobalVars.color.warning} 60%);
  }

  #root {
    height: 100%;
    background: url(${GlobalVars.img.cube_bg}) center top no-repeat;
    background-size: auto 100%;
  }

  .form-signin {
    width: 100%;
    padding: 15px;
    margin: 20px auto;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input::placeholder {
    text-align: left;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: -1px;
    border-radius: 0;
  }
  .form-signin button[type="submit"] {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.05rem;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
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
`;
