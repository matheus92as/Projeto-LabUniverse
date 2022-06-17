import React from 'react';
import styled from 'styled-components'

const ContainerFiltros = styled.div`
    width: 250px;
    height: 150px;
    background-color: #444444;
    border-radius: 10px;
    padding: 15px;
    margin-top: 30px;
    margin-left: 30px;
    display:flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-items: center;
    label{
        margin-bottom: 5px;
        color: white;
    }
    input{
        margin-bottom: 5px;
        border-radius: 5px;
        width: 70%;
    }
`

class Filtros extends React.Component {
    state = {}
    
    render() {
        return(
            <ContainerFiltros>
                <label>Valor mínimo</label>
                <input 
                    type="number"
                    value={this.props.precoMin}
                    onChange={this.props.updatePrecoMin}
                />
                <label>Valor máximo</label>
                <input 
                    type="number"
                    value={this.props.precoMax}
                    onChange={this.props.updatePrecoMax}
                />
            </ContainerFiltros>
        )
    }
}

export default Filtros