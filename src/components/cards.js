import React from "react";
import {
  CardBox,
  ImagensCard,
  ModalCards,
  Content,
  BorderContent,
} from "../styles/cardsStyle";

class Cards extends React.Component {
  state = {
    showModal: false,
  };

  onClickEstampa = () => {
    this.setState({ showModal: true });
    console.log(this.showModal);
  };

  clickFora = (event) => {
    let modal = document.getElementById("modal");
    if (!modal.contains(event.target)) {
      this.setState({ showModal: false });
    }
  };

  render() {
    return (
      <CardBox>
        {this.state.showModal === true ? (
          <ModalCards onClick={(e) => this.clickFora(e)}>
            <BorderContent>
              <Content id="modal">
                <button
                  className="close"
                  onClick={() => this.setState({ showModal: false })}
                >
                  X
                </button>
                <ul className="slider">
                  <li>
                    <input type="radio" id="slide1" name="slide" defaultChecked />
                    <label htmlFor="slide1"></label>
                    <img
                      src={this.props.fotoProduto}
                      alt={"Camiseta"}
                    ></img>
                  </li>
                  <li>
                    <input type="radio" id="slide2" name="slide" />
                    <label htmlFor="slide2"></label>
                    <img
                      src={this.props.fotoEstampa}
                      alt={"Estampa"}
                    ></img>
                  </li>
                </ul>
              </Content>
            </BorderContent>
          </ModalCards>
        ) : null}
        <ImagensCard estampa={this.props.fotoEstampa}>
          <img
            onClick={() => this.onClickEstampa()}
            className="img1"
            src={this.props.fotoProduto}
            alt={"Camiseta"}
          ></img>
        </ImagensCard>
        <div>
          <p className="descri">{this.props.descricao} </p>
          <p>R$ {this.props.preco},00</p>
        </div>
        <button
          className="addItem"
          onClick={() => this.props.adicionarItem(this.props.id)}
        >
          Adicionar ao carrinho
        </button>
      </CardBox>
    );
  }
}

export default Cards;
