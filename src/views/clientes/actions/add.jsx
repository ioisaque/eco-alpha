import React from 'react';

export default function Clientes() {
  return (
    <div>
      <div className="card card-body col-md-12">
        <h3>Dados Pessoais</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" name="nome" className="form-control" />
            </div>
            <div className="form-group">
              <label>Celular</label>
              <input
                type="text"
                name="celular"
                className="form-control id_number_fix"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Origem</label>
              <select
                name="origem"
                className="select2 form-control custom-select select2-hidden-accessible"
                style={{ width: '100%', height: '36px' }}
                tabIndex="-1"
                aria-hidden="true"
              >
                <option value="1">Não selecionado...</option>
                <option value="2">Indicação</option>
                <option value="3">Redes Sociais</option>
                <option value="4">Outros</option>
              </select>
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <div className="input-group">
                <input
                  type="text"
                  name="telefone"
                  className="form-control id_number_fix"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card card-body col-md-12">
        <h3 className="box-title">Endereço</h3>
        <div className="row">
          <div className="form-group col-md-5">
            <label>Logradouro</label>
            <input
              type="text"
              id="logradouro"
              name="logradouro"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-2">
            <label>Número</label>
            <input
              type="text"
              id="numero"
              name="numero"
              className="form-control id_number_fix"
            />
          </div>
          <div className="form-group col-md-5">
            <label>CEP</label>
            <div className="input-group">
              <input
                type="text"
                id="cep"
                name="cep"
                className="form-control id_number_fix"
              />
              <div className="input-group-append">
                <button id="buscarcep" className="btn btn-danger" type="button">
                  Buscar
                </button>
              </div>
            </div>
          </div>
          <div className="form-group col-md-4">
            <label>Bairro</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-5">
            <label>Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              className="form-control"
            />
          </div>
          <div className="form-group col-md-3">
            <label>Estado</label>
            <select
              id="estado"
              name="estado"
              className="form-control custom-select"
            >
              <option value="??">Não selecionado...</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <label>Complemento</label>
            <input
              type="text"
              id="complemento"
              name="complemento"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
