import styled from "styled-components";

export const ContainerCarrinho = styled.div`
  width: ${(props) => (props.mostrar === false ? "0px" : "300px")};
  padding: ${(props) => (props.mostrar === false ? "0px" : "15px")};
  opacity: ${(props) => (props.mostrar === false ? "0" : "1")};
  scale: 1;
  position: sticky;
  top: 20px;
  overflow: hidden;
  transition: all 0.5s;
  align-items: flex-start;
  justify-items: center;
  background-color: #444444;
  height: fit-content;
  border-radius: 10px;
  color: white;
  margin-top: 15px;
  margin-right: 30px;
  h3 {
    margin: 0;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 780px){
    font-size: 0.8rem;
    margin-right: 15px;
  }
  
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  background-color: #444444;
  border-radius: 10px;
  padding: 15px;
  opacity: ${(props) => (props.mostrar === false ? "0" : "1")};
  transition: opacity 0.1s;
  #total{
    height: 20px;
    text-align: start;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 780px){
    padding: 0px;
  }
`;