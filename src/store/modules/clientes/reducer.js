const INITIAL_STATE = {
  lista: [],
  offset: 0,
};

export default function Clientes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@clientes/SET_LISTA':
      return action;
    default:
      return state;
  }
}
