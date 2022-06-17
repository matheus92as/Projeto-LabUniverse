import React from 'react';
import styled from 'styled-components'

const ContainerItensCarrinho = styled.div`
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-items: center;
    margin: 10px 0;
    p{
        margin: 0 5px;
    }
`

class ItensCarrinho extends React.Component {
    state = {}
    
    render() {
        return(
            <ContainerItensCarrinho>
                <p>{this.props.item.quantia}x</p>
                <p>{this.props.item.descricao} </p>
                <button
                    onClick={() => this.props.removeItem(this.props.item.id)}
                >Remover</button>
            </ContainerItensCarrinho>
        )
    }
}

export default ItensCarrinho