import styled from 'styled-components'

export const Button = styled.button`
  background-color: #e66767;
  color: #fff;
  font-weight: 600;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0px 4px 12px rgba(230, 103, 103, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #d45a5a;
    box-shadow: 0px 6px 14px rgba(230, 103, 103, 0.6);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`
