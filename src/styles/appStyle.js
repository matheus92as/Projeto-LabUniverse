import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background-color: #1e1e1e;
  position: relative;
`;

export const Main = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CardContainer = styled.div`
  width: 980px;
  margin: 5px 0;
  margin-bottom: 150px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 500px){
    width: fit-content;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-image: url(https://thumbs.dreamstime.com/b/cen%C3%A1rio-estrelado-de-espa%C3%A7o-wallpaper-c%C3%B3smico-profundo-amplo-cosmos-com-estrelas-brilhantes-belo-universo-constela%C3%A7%C3%A3o-textura-218573124.jpg);
  height: 100px;
`;
