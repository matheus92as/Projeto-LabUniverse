import React from "react";
import { ContainerCartItens } from "../styles/cartItensStyle";

class ItensCarrinho extends React.Component {
  state = {};
  render() {
    return (
      <ContainerCartItens>
        <div className="item">
          <p>{this.props.item.quantia}x</p>
          <p>{this.props.item.descricao} </p>
        </div>
        <button
          className="close"
          onClick={() => this.props.removeItem(this.props.item.id)}
        >
          X
        </button>
      </ContainerCartItens>
    );
  }
}
export default ItensCarrinho;
