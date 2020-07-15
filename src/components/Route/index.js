import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AppLayout from '~/styles/AppLayout';

function RouteWrapper({
  isSignedIn,
  component: Component,
  isPrivate,
  ...rest
}) {
  if (!isSignedIn && isPrivate) return <Redirect to="/" />;
  if (isSignedIn && !isPrivate) return <Redirect to="/dashboard" />;

  return (
    <Route
      {...rest}
      render={(props) => (
        <AppLayout isSignedIn={isSignedIn}>
          <Component {...props} />
        </AppLayout>
      )}
    />
  );
}

export default connect((state) => ({
  isSignedIn: state.user.signed,
}))(RouteWrapper);

RouteWrapper.propTypes = {
  isSignedIn: PropTypes.bool,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isSignedIn: false,
};
