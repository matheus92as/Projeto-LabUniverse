import React from "react";
import styled from "styled-components";
import lupa from "../img/lupa1.png";
import logo from "../img/logo.png";
import login from "../img/user1.png";
import carrinho from "../img/carrinho.png";



const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-image:url(https://thumbs.dreamstime.com/b/cen%C3%A1rio-estrelado-de-espa%C3%A7o-wallpaper-c%C3%B3smico-profundo-amplo-cosmos-com-estrelas-brilhantes-belo-universo-constela%C3%A7%C3%A3o-textura-218573124.jpg);
  height: 100px;
`

const LoginCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-right: 15px;
  color: white;

  div{
    display: flex;
    align-items: center;
    img{
      margin-right: 5px;
      height: 30px;
    }
  }

  button{
    background-color: #b8b8b7;
    border: none;
  }
`

const Pesquisar = styled.div`
  display: flex;
  margin-left: 15px;

  img{
    width: 20px;
    margin-right: 5px;
  }

  input{
    border-radius: 5px;
  }
`

const Logo = styled.img`
  width: 100px;
`

const Login = styled.div`
    min-height: 80px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    .p2{
        display:none;
    }
    .p3{
        display:none;
    }
    :hover{
        .p1{
        transition: 0.8s;
        display:none;
        }
        .p2{
        display:block;
        margin: 0;
        }
        .p3{
        display:block;
        margin: 0;
        }
    }
`

class Header extends React.Component{
  render() {
    return (
      <MainContainer>
        <Pesquisar>
          <img src={lupa} alt="pesquisar" />
          <input
            type="text"
            value={this.props.inputPesquisar}
            onChange={this.props.updatePesquisar}
            placeholder="Pesquisar"
          />
        </Pesquisar>
        <Logo src={logo} alt="logo" />
        <LoginCarrinho>
          <div>
            <img src={login} alt="login" />
            <Login>
              <p className="p1">Minha conta</p>
              <p className="p2">Login</p>
              <p className="p3"> Criar conta</p>
            </Login>
          </div>
          <button>
            <img 
            src={carrinho} 
            alt="carrinho de compras"  
            onClick={this.props.onClickCarrinho}/>
          </button>
        </LoginCarrinho>
      </MainContainer>
    );
  }
}

export default Header;