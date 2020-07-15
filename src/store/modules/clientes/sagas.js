import { all, call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import api from '~/services/api';

import { getClientes } from './actions';

function* tryGetClientes({ offset }) {
  console.log('@sagas/tryGetClientes ==>', offset);
  try {
    // const response = yield call(api.post, '/clientes/getLista.php', {
    const response = yield call(api.get, '/getMenuItemsByCategory.php?id=5', {
      offset,
    });
    const lista = response.data;

    yield put(getClientes(lista));

    toast.info(lista);
  } catch (error) {
    console.log('Error on @clientes/GET_LISTA ==> ', error);
  } finally {
    toast.success('SUCCESS');
  }
}

export default all([takeLatest('@clientes/GET_LISTA', tryGetClientes)]);
