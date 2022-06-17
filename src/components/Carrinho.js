import React from 'react';
import styled from 'styled-components'
import ItensCarrinho from './ItemNoCarrinho' 

const ContainerCarrinho = styled.div`
    display: ${(props) => props.mostrar === false ? 'none' : 'flex'};  
    flex-flow: column wrap;
    align-items: flex-start;
    justify-items: center;
    width: 350px;
    min-height: 50px;
    max-height: 450px;
    background-color: #444444;
    color: white;
    border-radius: 10px;
    padding: 15px;
    margin-top: 30px;
    margin-right: 30px;
    h3{
        margin:0;
    }
`

class Carrinho extends React.Component {
    state = {}

    totalCompra = () => {
        let valorTotal = 0

        for(let produto of this.props.listaDeCompras) {
            valorTotal += produto.preco * produto.quantia
            // console.log(this.props.carrinhoHeader)
        }
        return valorTotal
    }
    
    render() {

        return(
            <ContainerCarrinho mostrar={this.props.carrinhoHeader}>
                <h3>Carrinho</h3>
                    {this.props.listaDeCompras.map((produto) =>{
                        return <ItensCarrinho
                            item ={produto}
                            removeItem={this.props.removeItem}
                        />
                    })}
                <p>Valor Total: R${this.totalCompra()},00</p>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho