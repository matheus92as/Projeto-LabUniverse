import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #1e1e1e;
  justify-content: flex-end;
  align-items: center;
  color: white;
  padding: 15px 100px 0 0;

  label{
    padding-right: 8px;
  }
  
`

class OrdenacaoPreco extends React.Component {
  render() {
    return (
      <MainContainer>
        <label htmlFor="sort">Ordenar por</label>
        <select
          name="sort"
          value={this.props.ordenacaoPreco}
          onChange={this.props.updateOrdenacaoPreco}
        >
          <option value="#">Selecionar</option>
          <option value="precoMenor">Menor preço</option>
          <option value="precoMaior">Maior preço</option>
        </select>
      </MainContainer>
    );
  }
}

export default OrdenacaoPreco;