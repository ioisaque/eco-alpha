export function getClientes(offset) {
  return {
    type: '@clientes/GET_LISTA',
    offset,
  };
}
