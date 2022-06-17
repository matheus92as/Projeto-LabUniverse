import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header'

import Carrinho from './Components/Carrinho'
import Filtros from './Components/Filtros';
import Cards from './Components/cards'

// import {Carrinho} from './Components/Carrinho'
// import Filtros from './Components/filtro'
// import Cards from './Components/cards'

import card1 from './img_cards/Card1.png'
import estampaCard1 from './img_cards/Estampa_Card1.png'
import card2 from './img_cards/Card2.png'
import estampaCard2 from './img_cards/Estampa_Card2.png'
import card3 from './img_cards/Card3.png'
import estampaCard3 from './img_cards/Estampa_Card3.png'
import OrdenacaoPreco from './Components/OrdenacaoPreco';


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Main =styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(https://wallpaperaccess.com/full/1219623.jpg);
`

const CardContainer = styled.div`
    width:980px;
    margin: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`



class App extends React.Component {
  state = {
    cards: [
      {
        id:1,
        fotoProduto: card1,
        fotoEstampa: estampaCard1,

        descricao:'Astronauta Triangulo',
        preco:80,

        descricao: "Camiseta Branca Astronauta - Masculina",
        preco: "100",

      },
      {
        id:2,
        fotoProduto: card2,
        fotoEstampa: estampaCard2,

        descricao:'Astronauta Balão',
        preco:81,

        descricao: "Camiseta Branca Astronauta - Feminina",
        preco: "81",

      },
      {
        id:3,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,

        descricao:'Astronauta Azul',
        preco:82,

        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "90",

      },
      {
        id:4,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,

        descricao:'Astronauta Azul',
        preco:83,

        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "83",

      },
      {
        id:5,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,

        descricao:'Astronauta Azul',
        preco:84,

        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "84",

      },
      {
        id:6,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,

        descricao:'Astronauta Azul',
        preco:85,

        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "85",

      },
      {
        id:7,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,

        descricao:'Astronauta Azul',
        preco: 86,

        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "86",

      },
      {
        id:8,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,

        descricao:'Astronauta Azul',
        preco: 87,
      },
    ],
    listaDeCompras: [
      {
        id:8,
        descricao:'Astronauta Azul',
        preco: 87,
        quantia: 1,

        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "87",

      },
    ],
    precoMin: "",
    precoMax: "",
    inputPesquisar: "",
    ordenacaoPreco: "",

    carrinhoHeader: false,
  }

  onClickCarrinho = () => {
    this.setState({carrinhoHeader: !this.state.carrinhoHeader})
    // console.log(this.state.carrinhoHeader)
  }

  // };


  updatePrecoMin = (dig) => {
    this.setState({ precoMin: dig.target.value });
  };
  updatePrecoMax = (dig) => {
    this.setState({ precoMax: dig.target.value });
  };

  adicionarItem = (id) =>{
    const produtoNoCarrinho = this.state.listaDeCompras.find(produto => id === produto.id)
    // esta const captura os valores do objeto com o id correto, podemos ver isso no console
    // console.log(produtoNoCarrinho)

    if (produtoNoCarrinho) { // depois de termos esse valor fazemos duas avaliações
      const novaListaCompras = this.state.listaDeCompras.map((produto) => {
        if( id === produto.id){     // na primeira vemos se o item ja esta no carrinho de compras
          return {
            ...produto, // então retornamos ele de volta a lista
            quantia: produto.quantia+1 // acrescentando 1 na quantia
          }
        }
        return produto       
    })
    this.setState({listaDeCompras: novaListaCompras})
    } else { // o segundo caso acontece caso o item não seja repetido
      const produtoEscolhido = this.state.cards.find(produto => id === produto.id)
      // então buscamos na lista geral de produtos
      const novaListaCompras = [...this.state.listaDeCompras, {...produtoEscolhido, quantia:1}]
      // e fazemos uma copia da lista de compra, mas com nosso produto novo e o novo valor de quantia
      this.setState({listaDeCompras: novaListaCompras})
    }
  }

  removeItem = (id) => { //le a lista de compras atual
    const carrinhoAtt = this.state.listaDeCompras.map((produto) => {
      if (produto.id === id) { // o item clicado
        return{
          ...produto,  // retorna
          quantia: produto.quantia -1 // com redução de -1 na quantia
        }
      }
      return produto
    }).filter((produto) => produto.quantia > 0) //depois disso filtra a lista e só retorna os produtos que não estiverem com quantia zerada

    this.setState({listaDeCompras: carrinhoAtt})
  }

  // render(){

  updatePesquisar = (dig) => {
    this.setState({ inputPesquisar: dig.target.value });
  };


  updateOrdenacaoPreco = (event) => {
    this.setState({ ordenacaoPreco: event.target.value});
  }

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
      }).sort((precoAtual, proximoPreco) => {
        switch (this.state.ordenacaoPreco) {
          case "precoMenor":
            return precoAtual.preco - proximoPreco.preco
          case "precoMaior":
            return proximoPreco.preco - precoAtual.preco
          default:
            return  this.state.preco
        }
      })
      .map((card) => {
        return (
          <Cards

          id = {card.id}
          fotoProduto = {card.fotoProduto}
          fotoEstampa ={card.fotoEstampa}
          descricao = {card.descricao}
          preco = {card.preco}
          adicionarItem={this.adicionarItem}
          />  
      )
    })

    // return (
      // <MainContainer>
      //   {/* <Header 
      //     onClickCarrinho={this.onClickCarrinho}
      //     carrinhoHeader={this.state.carrinhoHeader} */}
      //   {/* />

      //       fotoProduto={card.fotoProduto}
      //       fotoEstampa={card.fotoEstampa}
      //       descricao={card.descricao}
      //       preco={card.preco}
      //     /> */}
      //   );
      // });

      // console.log(this.state.ordenacaoPreco)

    return (
      
      <MainContainer>
        <Header
          inputPesquisar={this.state.inputPesquisar}
          updatePesquisar={this.updatePesquisar}
          onClickCarrinho={this.onClickCarrinho}
          carrinhoHeader={this.state.carrinhoHeader}
        />
        <OrdenacaoPreco 
          ordenacaoPreco={this.state.ordenacaoPreco}
          updateOrdenacaoPreco={this.updateOrdenacaoPreco}
        />       

        <Main>
          <Filtros
            precoMin={this.state.precoMin}
            precoMaxn={this.state.precoMax}
            updatePrecoMin={this.updatePrecoMin}
            updatePrecoMax={this.updatePrecoMax}
          />

          <CardContainer>
            {listaFiltrada} 
          </CardContainer>
          <Carrinho
            listaDeCompras={this.state.listaDeCompras}
            removeItem={this.removeItem}
            carrinhoHeader={this.state.carrinhoHeader}
          />
        </Main>  
        <CardContainer>{listaFiltrada}</CardContainer>
      </MainContainer> 

    //     </Main>
    // </MainContainer>

    )
  }
}


export default App;
