import styled from 'styled-components'
import bgHome from '../images/bg-home.jpg'

export const AppContainer = styled.div`
  background: url(${bgHome});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  filter: brightness(69%);
`
export const TextContainer = styled.div`
  width: 604px;
  height: 224px;
  margin-left: 661px;
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 160%;

  color: #efefeb;
  /* or 51px */

  background: rgba(16, 12, 8, 0.55);
  box-shadow: 0px 0px 50px 50px rgba(16, 12, 8, 0.55);

  display: flex;
`
export const Button = styled.button`
  width: 378px;
  height: 196px;
  left: 287px;
  top: 357px;

  font-family: 'Urbanist';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #100c08;

  background: rgba(244, 211, 194, 0.9);
`
