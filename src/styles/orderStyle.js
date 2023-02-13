import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  color: white;
  label {
    padding-right: 8px;
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1440px;
  @media screen and (min-device-width: 320px) and (max-device-width: 650px) {
    width: 95%;
    align-items: flex-start;
  }
`;

export const Filtro = styled.div`
  margin: 10px 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  h3 {
    margin-right: 15px;
  }
  #values {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .min-max {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .input-group {
    position: relative;
    margin: 0 5px;
  }
  .input {
    border: solid 1.5px #9e9e9e;
    border-radius: 0.5rem;
    background: none;
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
    color: #f5f5f5;
    width: 100px;
    transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    :focus,
    :valid {
      outline: none;
      border: 1.5px solid #9f40f8;
    }
    :valid ~ label {
      transform: translateY(-50%) scale(0.8);
      background-color: #212121;
      padding: 0 0.2em;
      color: #9f40f8;
    }
    :focus ~ label {
      transform: translateY(-50%) scale(0.8);
      background-color: #212121;
      padding: 0 0.2em;
      color: #9f40f8;
    }
  }
  .user-label {
    position: absolute;
    left: 15px;
    color: #e8e8e8;
    pointer-events: none;
    transform: translateY(0.5rem);
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0px 5px;
    .input {
      margin: 2.5px 0;
    }
    .user-label {
      transform: translateY(0.7rem);
    }
  }
`;

export const Ordenacao = styled.div`
  margin: 0 60px;
  label {
    font-size: 18px;
    font-weight: bold;
  }
  select {
    appearance: none;
    border: solid 1.5px #9e9e9e;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: rgba(233, 230, 234, 0.1);
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
    color: #f5f5f5;
    :focus {
      outline: none;
    }
    * {
      background-color: rgba(93, 92, 93, 1);
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 650px) {
    display: flex;
    flex-direction: column;
    margin: 5px 30px;
    label{
      margin: 20px 0;
    }
    /* background-color: #f5f5f5; */
  }
`;
