import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    body {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      background-color: ${theme.colors.tertiaryColor};
      overflow-x: hidden;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }
  `

export const AppLayout = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content' 'footer';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  height: 100vh;
`

export const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`

export const LoadingContainer = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
