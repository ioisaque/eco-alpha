import React from 'react';

import LinkBtn from '~/components/LinkBtn';
import Breadcrumb from '~/components/Breadcrumb';

import Adicionar from './actions/add';

export default function Clientes({ match }) {
  const action = decodeURIComponent(match.params.action);

  // SELECT * FROM `id_clientes` LIMIT 10 OFFSET 10

  switch (action) {
    case 'adicionar':
      return (
        <>
          {' '}
          <Breadcrumb
            route="Clientes"
            root="/clientes/listar"
            save
            onSave={() => console.log('SAVED.')}
            goBack
            match={match}
          />
          <Adicionar />
        </>
      );

    default:
      return (
        <>
          <Breadcrumb
            route="Clientes"
            root="/clientes/listar"
            add
            remove
            search
            match={match}
          />
          <div className="card p-0 card-body">
            <div className="table-responsive">
              <table id="clientes" className="table table-striped">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Celular</th>
                    <th>Origem</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ISAQUE COSTA</td>
                    <td>(31) 9 9588-2203</td>
                    <td>Outros</td>
                    <td>
                      <LinkBtn
                        link="/pedidos/cliente/1"
                        color="danger"
                        icon="history"
                      />
                      <LinkBtn
                        link="/pedidos/add/1"
                        color="success"
                        icon="shopping_cart"
                      />
                      <LinkBtn
                        link="/clientes/view/1"
                        color="info"
                        icon="create"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>GGG FDD</td>
                    <td>(31) 9 9588-2203</td>
                    <td>Outros</td>
                    <td>
                      <LinkBtn
                        link="/pedidos/cliente/1"
                        color="danger"
                        icon="history"
                      />
                      <LinkBtn
                        link="/pedidos/add/1"
                        color="success"
                        icon="shopping_cart"
                      />
                      <LinkBtn
                        link="/clientes/view/1"
                        color="info"
                        icon="create"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
  }
}
