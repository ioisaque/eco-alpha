const INITIAL_STATE = {
  signed: false,
};

export default function User(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@user/LOGIN_SUCCESS':
      return { signed: true, ...action.usuario };
    case '@user/LOGOFF':
      return INITIAL_STATE;
    default:
      return state;
  }
}
