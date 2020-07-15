import { all, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { doLogin } from './actions';

function* tryLogin({ email, senha }) {
  console.log('@sagas/tryLogin ==>', email, senha);
  try {
    const usuario = null;

    yield put(doLogin(usuario));

    toast.info(usuario);
  } catch (error) {
    console.log('Error on @user/LOGIN_REQUEST ==> ', error);
  } finally {
    toast.success('SUCCESS');
  }
}

export default all([takeLatest('@user/LOGIN_REQUEST', tryLogin)]);
