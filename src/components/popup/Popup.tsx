import React from 'react'
import { PopupCloseButton, PopupContainer, PopupContent, PopupImage, PopupOverlay } from './PopupStyles'

interface PopupProps {
  image?: string
  message: string
  desdcription?: string
  price?: string
  title: string
  children?: React.ReactNode
  onClose: () => void
}

export default function Popup({ message, onClose, image, desdcription, price, title, children }: PopupProps) {
  return (
    <>
      <PopupOverlay onClick={onClose} />
      <PopupContainer className="container">
        {image && <PopupImage src={image} alt={title}></PopupImage>}
        <PopupContent>
          <h2>{title}</h2>
          {desdcription && <p>{desdcription}</p>}
          <p>{message}</p>
          {price && <p>{price}</p>}
          <PopupCloseButton onClick={onClose}>X</PopupCloseButton>
          {children}
        </PopupContent>
      </PopupContainer>
    </>
  )
}
