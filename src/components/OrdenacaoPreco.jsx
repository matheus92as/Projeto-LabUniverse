import React from "react";
import {
  MainContainer,
  SecondContainer,
  Filtro,
  Ordenacao,
} from "../styles/orderStyle";

class OrdenacaoPreco extends React.Component {
  render() {
    return (
      <MainContainer>
        <SecondContainer>
          <Filtro>
            <h3>Filtros</h3>
            <div class="input-group">
              <input
                type="number"
                value={this.props.precoMin}
                onChange={this.props.updatePrecoMin}
                autocomplete="off"
                required
                class="input"
              />
              <label class="user-label">Valor Min</label>
            </div>
            <div class="input-group">
              <input
                type="number"
                value={this.props.precoMax}
                onChange={this.props.updatePrecoMax}
                autocomplete="off"
                class="input"
                required
              />
              <label class="user-label">Valor Máx</label>
            </div>
          </Filtro>
          <Ordenacao>
            <label htmlFor="sort">Ordenar por :</label>
            <select
              name="sort"
              value={this.props.ordenacaoPreco}
              onChange={this.props.updateOrdenacaoPreco}
            >
              <option value="#">Selecionar</option>
              <option value="precoMenor">Menor preço</option>
              <option value="precoMaior">Maior preço</option>
            </select>
          </Ordenacao>
        </SecondContainer>
      </MainContainer>
    );
  }
}

export default OrdenacaoPreco;
