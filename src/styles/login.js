import { createGlobalStyle } from 'styled-components';
import { GlobalVars } from './global';

export default createGlobalStyle`

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background: url(${GlobalVars.img.cube_bg}) center top no-repeat;
    background-size: auto 100%;
  }

`;