import styled from "styled-components";

export const CardBox = styled.div`
  background-color: #444444;
  color: white;
  width: 200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  transition: 0.2s;
  p {
    transition: 0.2s;
    display: flex;
    text-align: start;
    padding: 0 15px;
    margin: 10px 0;
  }
  .addItem {
    cursor: pointer;
    --color: #560bad;
    font-family: inherit;
    align-self: center;
    width: 12em;
    margin: 10px;
    padding: 5px 0;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    z-index: 1;
    font-size: 15px;
    border-radius: 6px;
    font-weight: bold;
    color: var(--color);
    :before {
      content: "";
      position: absolute;
      z-index: -1;
      background: var(--color);
      height: 150px;
      width: 250px;
      border-radius: 50%;
    }
  }
  .addItem:hover {
    color: #fff;
  }
  .addItem:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }
  .addItem:hover:before {
    top: -30px;
    left: -30px;
  }
  .addItem:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
  :hover {
    .descri {
      transition: 0.5s;
      color: #a64ff8;
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 780px) {
    width: 150px;
    p {
      font-size: 0.8rem;
    }
    .addItem {
      width: 11em;
      font-size: 12px;
    }
  }
`;

export const ImagensCard = styled.div`
  width: 100%;
  background-image: url(${(props) => props.estampa});
  background-size: 200px 300px;
  background-repeat: no-repeat;
  padding: 0;
  .img1 {
    width: 100%;
    transition: 0.6s;
    opacity: 100%;
  }
  :hover {
    .img1 {
      transition: 0.6s;
      opacity: 0%;
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 780px) {
    background-size: 150px 225px;
  }
`;

export const ModalCards = styled.div`
  display: flex;
  position: fixed;
  z-index: 20;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const BorderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 20px;
  padding: 10px 0;
  margin: auto;
  position: relative;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  animation: scale-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @keyframes scale-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 780px) {
    
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 750px;
  width: 580px;
  color: white;
  margin: auto;
  position: relative;
  transition: 0.5s;

  .close {
    cursor: pointer;
    position: absolute;
    top: -1%;
    right: 1%;
    padding: 5px 8px;
    margin: 5px;
    width: auto;
    border: none;
    border-radius: 100%;
    font-size: 12px;
    background-color: #797979;
    color: white;
    transition: 0.2s;
    :hover {
      background-color: #444444;
      transition: 0.2s;
      box-shadow: inset 3px 3px 5px #242424, inset -3px -3px 5px #797979;
    }
  }

  .slider {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: auto;
    position: relative;

    li {
      list-style: none;
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      input {
        display: none;
        :checked ~ img {
          opacity: 1;
          visibility: visible;
          z-index: 10;
        }
      }
      label {
        bottom: 10px;
        cursor: pointer;
        display: block;
        height: 10px;
        position: absolute;
        width: 10px;
        z-index: 10;
        transition: 0.5s;
        :hover {
          transform: scale(1.2);
          transition: 0.5s;
        }
      }
      img {
        margin: auto;
        height: 100%;
        width: 100%;
        vertical-align: top;
        border-radius: 17px;
        opacity: 0;
        visibility: hidden;
      }
    }

    li:nth-child(1) label {
      width: 0;
      height: 0;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-right: 25px solid #444444;
      left: -30px;
      top: 50%;
      :hover {
        border-right: 25px solid #242424;
      }
    }

    li:nth-child(2) label {
      width: 0;
      height: 0;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
      border-left: 25px solid #444444;
      right: -30px;
      top: 50%;
      :hover {
        border-left: 25px solid #242424;
      }
    }
  }

  span {
    width: 50%;
    text-align: center;
    font-size: 24px;
    margin-top: 18px;
    a {
      cursor: pointer;
      font-weight: bolder;
      text-decoration: underline;
    }
  }

  @media screen and (min-device-width: 550px) and (max-device-width: 780px) {
    height: 650px;
    width: 480px;
    .slider{
      height: 95%;
      width: 80%;
      li:nth-child(1) label {
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 20px solid #444444;
        left: -25px;
        :hover {
          border-right: 20px solid #242424;
        }
      }
      li:nth-child(2) label {
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-left: 20px solid #444444;
        right: -25px;
        :hover {
          border-left: 20px solid #242424;
        }
      }
    }
  }
  @media screen and (min-device-width: 415px) and (max-device-width: 549px){
    height: 550px;
    width: 380px;
    .slider{
      height: 90%;
      width: 75%;
      li:nth-child(1) label {
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-right: 18px solid #444444;
        left: -22px;
        :hover {
          border-right: 18px solid #242424;
        }
      }
      li:nth-child(2) label {
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-left: 18px solid #444444;
        right: -22px;
        :hover {
          border-left: 18px solid #242424;
        }
      }
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 414px){
    height: 450px;
    width: 280px;
    .slider{
      height: 85%;
      width: 70%;
      li:nth-child(1) label {
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-right: 15px solid #444444;
        left: -20px;
        :hover {
          border-right: 15px solid #242424;
        }
      }
      li:nth-child(2) label {
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid #444444;
        right: -20px;
        :hover {
          border-left: 15px solid #242424;
        }
      }
    }
  }
`;
