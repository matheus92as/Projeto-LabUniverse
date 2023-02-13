import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(https://thumbs.dreamstime.com/b/cen%C3%A1rio-estrelado-de-espa%C3%A7o-wallpaper-c%C3%B3smico-profundo-amplo-cosmos-com-estrelas-brilhantes-belo-universo-constela%C3%A7%C3%A3o-textura-218573124.jpg);
  height: 100px;
  font-family: "Roboto", sans-serif;
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  @media screen and (min-device-width: 320px) and (max-device-width: 650px) {
    width: 95%;
  }
`;

export const Pesquisar = styled.div`
  display: flex;
  margin-left: 25px;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  .wave-group {
    position: relative;
    .input {
      font-size: 16px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 200px;
      border: none;
      border-bottom: 1px solid #515151;
      background: transparent;
      color: #e9e6ea;
      :focus {
        outline: none;
        background: rgba(233, 230, 234, 0.1);
        border-radius: 5px 5px 0px 0px;
      }
      :valid {
        background: rgba(233, 230, 234, 0.1);
        border-radius: 5px 5px 0px 0px;
      }
      :valid ~ label .label-char {
        transform: translateY(-20px);
        font-size: 14px;
        font-weight: bold;
        color: #9f40f8;
      }
      :focus ~ label .label-char {
        transform: translateY(-20px);
        font-size: 14px;
        font-weight: bold;
        color: #9f40f8;
      }
    }

    .input:focus ~ .bar:before,
    .input:focus ~ .bar:after {
      width: 50%;
    }
    .label {
      color: #999;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      display: flex;
    }
    .label-char {
      letter-spacing: 1px;
      transition: 0.2s ease all;
    }

    .label-char:nth-of-type(1) {
      transition-delay: 0s;
    }
    .label-char:nth-of-type(2) {
      transition-delay: 0.06s;
    }
    .label-char:nth-of-type(3) {
      transition-delay: 0.12s;
    }
    .label-char:nth-of-type(4) {
      transition-delay: 0.18s;
    }
    .label-char:nth-of-type(5) {
      transition-delay: 0.24s;
    }
    .label-char:nth-of-type(6) {
      transition-delay: 0.3s;
    }
    .label-char:nth-of-type(7) {
      transition-delay: 0.36s;
    }
    .label-char:nth-of-type(8) {
      transition-delay: 0.42s;
    }
    .label-char:nth-of-type(9) {
      transition-delay: 0.48s;
    }

    .bar {
      position: relative;
      display: block;
      width: 100%;
      :before {
        left: 50%;
      }
      :after {
        right: 50%;
      }
    }
    .bar:before,
    .bar:after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #9f40f8;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
  }

  @media screen and (min-device-width: 380px) and (max-device-width: 650px) {
    margin-left: 0px;
    .wave-group {
      position: relative;
      .input {
        width: 100px;
      }
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 379px){
    margin-left: 0px;
    .wave-group {
      position: relative;
      .input {
        width: 75px;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
  @media screen and (min-device-width: 380px) and (max-device-width: 650px) {
    width: 80px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 379px){
    width: 60px;
  }
`;

export const LoginCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-right: 25px;
  color: white;
  #account {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    transition: 0.2s;
    img {
      margin-right: 5px;
      height: 30px;
    }
    :hover {
      background: rgba(233, 230, 234, 0.1);
      border-radius: 10px;
      transition: 0.2s;
    }
  }
  button {
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 650px){
    width: fit-content;
    margin-right: 0px;
    #account{
      padding: 5px;
      img {
      margin-right: 0px;
    }
    }
  }
`;

export const Login = styled.div`
  max-height: 80px;
  min-width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: none;
  p {
    margin: 0;
    cursor: pointer;
  }
  #login {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
  }
  .p1 {
    z-index: 5;
    opacity: 1;
    transition: 0.4s;
  }
  .p2 {
    z-index: -5;
    opacity: 0;
    transition: 0.4s;
  }
  :hover {
    .p1 {
      z-index: -5;
      opacity: 0;
      transition: 0.4s;
    }
    .p2 {
      z-index: 5;
      transition: 0.8s;
      opacity: 1;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 650px) {
    display: none;
  }
`;
