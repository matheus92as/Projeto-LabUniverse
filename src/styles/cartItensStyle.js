import styled from "styled-components";

export const ContainerCartItens = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  height: 25px;
  margin-right: 15px;
  text-align: center;
  animation: showUp 0.3s alternate ease-in-out both;
  p {
    margin: 5px 2px;
  }
  .item {
    display: flex;
    flex-flow: row;
  }
  .close {
    border: none;
    border-radius: 100%;
    margin-left: 5px;
    padding: 4px 6px;
    font-size: 10px;
    background-color: #444444;
    box-shadow: 3px 3px 5px #242424, -3px -3px 5px #797979;
    cursor: pointer;
    transition: 0.2s;
    color: white;
    :hover {
      background-color: #444444;
      transition: 0.2s;
      box-shadow: inset 3px 3px 5px #242424, inset -3px -3px 5px #797979;
    }
  }
  @keyframes showUp {
    from {
      transform: translateX(-1rem);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 780px){
    margin: 5px 0;
    .item{
      text-align: left;
    }
  }
`;
