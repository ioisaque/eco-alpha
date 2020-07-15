import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from 'reactstrap';
import { Form, Input } from '@rocketseat/unform';
import * as UserActions from '~/store/modules/user/actions';

import { GlobalVars, LoginForm } from '~/styles/global';

function Login(props) {
  const handleLogin = (data) => {
    const { tryLogin } = props;

    tryLogin(data);
  };

  return (
    <div className="row h-100">
      <div className="col-12 my-auto">
        <LoginForm>
          <img
            width="200"
            className="m-5"
            alt="Logo IdeYou"
            src={GlobalVars.img.logo}
          />
          <Form onSubmit={handleLogin} className="form-signin">
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              className="form-control"
              // required
            />
            <Input
              type="password"
              name="senha"
              placeholder="Senha"
              className="form-control"
              // required
            />
            <Button type="submit" className="btn btn-lg btn-danger btn-block">
              LOGIN
            </Button>
          </Form>
          <a
            href="https://ideyou.com.br"
            className="d-flex justify-content-center"
          >
            <img
              alt="Desenvolvido por Isaque Costa"
              src="https://cdn.isaquecosta.com.br/marketing/copyright_light.png"
            />
          </a>
        </LoginForm>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
