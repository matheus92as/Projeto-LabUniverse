import React from "react";
import ItensCarrinho from "./ItemNoCarrinho";
import {ContainerCarrinho, Content} from '../styles/cartStyle'

class Carrinho extends React.Component {
  state = {};

  totalCompra = () => {
    let valorTotal = 0;
    for (let produto of this.props.listaDeCompras) {
      valorTotal += produto.preco * produto.quantia;
    }
    return valorTotal;
  };

  render() {
    return (
      <ContainerCarrinho mostrar={this.props.carrinhoHeader}>
        <Content mostrar={this.props.carrinhoHeader}>
          <h3>Carrinho</h3>
          {this.props.listaDeCompras.map((produto) => {
            return (
              <ItensCarrinho
                item={produto}
                removeItem={this.props.removeItem}
              />
            );
          })}
          <p id='total'>Valor Total: R${this.totalCompra()},00</p>
        </Content>
      </ContainerCarrinho>
    );
  }
}

export default Carrinho;