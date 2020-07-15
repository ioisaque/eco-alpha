import React from 'react';
import PropTypes from 'prop-types';

import Menu from '~/components/Menu';
import Header from '~/components/Header';

import { AppWrapper, LoginContainer, PagesContainer } from './styles';
import { GlobalStyles } from '~/styles/global';

import 'react-toastify/dist/ReactToastify.css';

export default function AppLayout({ isSignedIn, children }) {
  return (
    <AppWrapper>
      <GlobalStyles />
      {isSignedIn && <Menu />}

      {isSignedIn ? (
        <PagesContainer>
          <Header />
          {children}
        </PagesContainer>
      ) : (
        <LoginContainer>{children}</LoginContainer>
      )}
    </AppWrapper>
  );
}

AppLayout.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
