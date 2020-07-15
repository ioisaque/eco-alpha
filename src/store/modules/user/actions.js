export function tryLogin(email, senha) {
  return {
    type: '@user/LOGIN_REQUEST',
    email,
    senha,
  };
}
export function doLogin(usuario) {
  return {
    type: '@user/LOGIN_SUCCESS',
    usuario,
  };
}

export function doLogoff() {
  return {
    type: '@user/LOGOFF',
  };
}
