import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg' // substitua pelo caminho do logo

const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 28px;
    height: 28px;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #e66767;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 24px;

  a {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #e66767;
    }
  }
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoArea>
        <img src={logo} alt="logo" />
        <h1>eFood</h1>
      </LogoArea>
      <Nav>
        <a href="/">Início</a>
        <a href="/restaurantes">Restaurantes</a>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
