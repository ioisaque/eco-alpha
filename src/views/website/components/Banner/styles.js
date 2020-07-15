import styled from 'styled-components';

import { GlobalVars } from '~/styles/global';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;

  background: url(${GlobalVars.banner.one});
  background-size: 100%;
  background-repeat: none;
  background-position-x: center;
  background-position-y: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${GlobalVars.color.white};

  background: ${GlobalVars.color.darker};
`;

export const Logo = styled.img.attrs({
  src: GlobalVars.img.ecoalpha,
})`
  max-width: 400px;
  display: block;
  padding: 30px;
  margin: 30px auto;
`;

export const SubTitle = styled.p`
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 5rem;
`;

export const Button = styled.button`
  display: block;
  margin: 3rem auto;

  font-size: 1rem;
  font-weight: 500;
  padding: 15px 50px;
  color: ${GlobalVars.color.white};

  background: none;
  border-radius: 1rem;
  border: 2px solid ${GlobalVars.color.white};
`;
