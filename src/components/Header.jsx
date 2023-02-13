import React from "react";
import lupa from "../assets/img/lupa1.png";
import logo from "../assets/img/LabUniverse.png";
import login from "../assets/img/user1.png";
import carrinho from "../assets/img/carrinho.png";
import * as H from "../styles/headerStyle";

class Header extends React.Component {
  render() {
    return (
      <H.MainContainer>
        <H.SecondContainer>
          <H.Pesquisar>
            <img src={lupa} alt="pesquisar" />
            <div className="wave-group">
              <input
                type="text"
                className="input"
                placeholder=""
                required
                value={this.props.inputPesquisar}
                onChange={this.props.updatePesquisar}
              />
              <span className="bar"></span>
              <label className="label">
                <span className="label-char">P</span>
                <span className="label-char">e</span>
                <span className="label-char">s</span>
                <span className="label-char">q</span>
                <span className="label-char">u</span>
                <span className="label-char">i</span>
                <span className="label-char">s</span>
                <span className="label-char">a</span>
                <span className="label-char">r</span>
              </label>
            </div>
          </H.Pesquisar>
          <H.Logo src={logo} alt="logo" />
          <H.LoginCarrinho>
            <div id="account">
              <img src={login} alt="login" />
              <H.Login>
                <p className="p1">Minha conta</p>
                <div id="login">
                  <p className="p2">Login</p>
                  <p className="p2"> Criar conta</p>
                </div>
              </H.Login>
            </div>
            <button>
              <img
                src={carrinho}
                alt="carrinho de compras"
                onClick={this.props.onClickCarrinho}
              />
            </button>
          </H.LoginCarrinho>
        </H.SecondContainer>
      </H.MainContainer>
    );
  }
}

export default Header;