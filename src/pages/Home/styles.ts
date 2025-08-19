import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
`

export const Hero = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  padding: 56px 0 32px;
  gap: 12px;
`

export const Title = styled.h1`
  font-size: 38px;
  color: var(--brand);
  line-height: 1.1;
`

export const Subtitle = styled.p`
  font-size: 18px;
  opacity: 0.9;
`

export const Cards = styled.section`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`

export const Card = styled.article`
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px var(--shadow);

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .content {
    display: grid;
    gap: 8px;
    padding: 16px;
  }

  h3 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
    opacity: 0.8;
  }
`
