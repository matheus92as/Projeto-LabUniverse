import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  background-color: #1e1e1e;
  align-items: center;
  color: white;
  padding-top: 25px;
  label{
    padding-right: 8px;
  }
`
const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:1300px;
`

const Filtro = styled.div`
   margin: 0 25px;
`
const Ordenacao = styled.div`
   margin: 0 60px;
`

class OrdenacaoPreco extends React.Component {
  render() {
    return (
      <MainContainer>
        <SecondContainer>
          <Filtro>
            <h3>Filtros</h3>
          </Filtro>
          <Ordenacao>
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
          </Ordenacao>
        </SecondContainer>
      </MainContainer>
    );
  }
}

export default OrdenacaoPreco;