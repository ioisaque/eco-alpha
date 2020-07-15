import styled from 'styled-components';

import { GlobalVars } from '~/styles/global';

export const Container = styled.div`
  width: 100%;
  height: 800px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${GlobalVars.color.white};

  background: url(${GlobalVars.banner.one});
  background-size: 100%;
  background-repeat: none;
  background-position-x: center;
  background-position-y: center;
`;

export const Title = styled.h1`
  display: block;
  padding: 100px;
  font-size: 10rem;
  font-weight: 700;
  text-align: center;
`;

export const SubTitle = styled.p`
  display: block;
  font-size: 2rem;
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

  border: none;
  border-radius: 1rem;
  background: ${GlobalVars.color.e_green};
`;
