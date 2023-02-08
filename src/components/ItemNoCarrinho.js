import React from 'react';
import styled from 'styled-components'

const ContainerItensCarrinho = styled.div`
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-items: center;
    margin: 10px 0;
    height: 25px;
    text-align: center;
    overflow: hidden;
    p{
        margin:5px 0;
    }
    button{
        border: none;
        border-radius: 25px;
        margin-left: 5px;
        padding:2px 5px;
        cursor: pointer;
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
                >X</button>
            </ContainerItensCarrinho>
        )
    }
}

export default ItensCarrinho