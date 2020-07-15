import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, LoggedUser } from './styles';
import * as UserActions from '~/store/modules/user/actions';

class Header extends React.Component {
  handleLogoff = () => {
    const { doLogoff } = this.props;

    doLogoff();
  };

  render() {
    return (
      <Container>
        <LoggedUser user={this.props.user} />
        <button
          type="button"
          className="btn"
          data-toggle="tooltip"
          data-placement="top"
          title="Sair do Sistema"
          onClick={this.handleLogoff}
        >
          <i className="mIcon">login</i> Sair
        </button>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  (state) => ({
    user: state.user,
  }),
  mapDispatchToProps
)(Header);
