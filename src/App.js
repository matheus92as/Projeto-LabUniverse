import React from "react";
import Header from "./components/Header";
import Carrinho from "./components/Carrinho";
import Cards from './components/Card'
import OrdenacaoPreco from "./components/OrdenacaoPreco";
import { MainContainer, Main, CardContainer, Footer } from "./styles/appStyle";
import cards from "./constants/cards";

class App extends React.Component {
  state = {
    cards: cards,
    listaDeCompras: [],
    precoMin: "",
    precoMax: "",
    inputPesquisar: "",
    ordenacaoPreco: "",
    carrinhoHeader: false,
  };

  onClickCarrinho = () => {
    this.setState({ carrinhoHeader: !this.state.carrinhoHeader });
  };

  updatePrecoMin = (dig) => {
    this.setState({ precoMin: dig.target.value });
  };
  updatePrecoMax = (dig) => {
    this.setState({ precoMax: dig.target.value });
  };

  adicionarItem = (id) => {
    const produtoNoCarrinho = this.state.listaDeCompras.find(
      (produto) => id === produto.id
    );
    // esta const captura os valores do objeto com o id correto, podemos ver isso no console
    // console.log(produtoNoCarrinho)

    if (produtoNoCarrinho) {
      // depois de termos esse valor fazemos duas avaliações
      const novaListaCompras = this.state.listaDeCompras.map((produto) => {
        if (id === produto.id) {
          // na primeira vemos se o item ja esta no carrinho de compras
          return {
            ...produto, // então retornamos ele de volta a lista
            quantia: produto.quantia + 1, // acrescentando 1 na quantia
          };
        }
        return produto;
      });
      this.setState({ carrinhoHeader: true });
      this.setState({ listaDeCompras: novaListaCompras });
    } else {
      // o segundo caso acontece caso o item não seja repetido
      const produtoEscolhido = this.state.cards.find(
        (produto) => id === produto.id
      );
      // então buscamos na lista geral de produtos
      const novaListaCompras = [
        ...this.state.listaDeCompras,
        { ...produtoEscolhido, quantia: 1 },
      ];
      // e fazemos uma copia da lista de compra, mas com nosso produto novo e o novo valor de quantia
      this.setState({ listaDeCompras: novaListaCompras });
      this.setState({ carrinhoHeader: true });
    }
  };

  removeItem = (id) => {
    //le a lista de compras atual
    const carrinhoAtt = this.state.listaDeCompras
      .map((produto) => {
        if (produto.id === id) {
          // o item clicado
          return {
            ...produto, // retorna
            quantia: produto.quantia - 1, // com redução de -1 na quantia
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantia > 0); //depois disso filtra a lista e só retorna os produtos que não estiverem com quantia zerada

    this.setState({ listaDeCompras: carrinhoAtt });
  };

  updatePesquisar = (dig) => {
    this.setState({ inputPesquisar: dig.target.value });
  };

  updateOrdenacaoPreco = (event) => {
    this.setState({ ordenacaoPreco: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.cards
      .filter((card) => {
        return this.state.precoMin === "" || card.preco >= this.state.precoMin;
      })
      .filter((card) => {
        return this.state.precoMax === "" || card.preco <= this.state.precoMax;
      })
      .filter((card) => {
        return card.descricao
          .toLowerCase()
          .includes(this.state.inputPesquisar.toLowerCase());
      })
      .sort((precoAtual, proximoPreco) => {
        switch (this.state.ordenacaoPreco) {
          case "precoMenor":
            return precoAtual.preco - proximoPreco.preco;
          case "precoMaior":
            return proximoPreco.preco - precoAtual.preco;
          default:
            return this.state.preco;
        }
      })
      .map((card) => {
        return (
          <Cards
            key={card.id}
            id={card.id}
            fotoProduto={card.fotoProduto}
            fotoEstampa={card.fotoEstampa}
            descricao={card.descricao}
            preco={card.preco}
            adicionarItem={this.adicionarItem}
          />
        );
      });

    return (
      <MainContainer>
        <Header
          inputPesquisar={this.state.inputPesquisar}
          updatePesquisar={this.updatePesquisar}
          onClickCarrinho={this.onClickCarrinho}
          carrinhoHeader={this.state.carrinhoHeader}
        />
        <OrdenacaoPreco
          precoMin={this.state.precoMin}
          precoMaxn={this.state.precoMax}
          updatePrecoMin={this.updatePrecoMin}
          updatePrecoMax={this.updatePrecoMax}
          ordenacaoPreco={this.state.ordenacaoPreco}
          updateOrdenacaoPreco={this.updateOrdenacaoPreco}
        />
        <Main>
          <CardContainer>{listaFiltrada}</CardContainer>
          <Carrinho
            listaDeCompras={this.state.listaDeCompras}
            removeItem={this.removeItem}
            carrinhoHeader={this.state.carrinhoHeader}
          />
        </Main>
        <Footer />
      </MainContainer>
    );
  }
}

export default App;
