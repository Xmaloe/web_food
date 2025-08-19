import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
`

export const Title = styled.h2`
  font-size: 28px;
  margin: 12px 0 20px;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`

export const Item = styled.article`
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px var(--shadow);
  padding-bottom: 12px;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  h3 {
    padding: 12px 16px 0;
    font-size: 18px;
  }
  p {
    padding: 6px 16px 0;
    font-size: 14px;
    opacity: 0.85;
  }

  .actions {
    display: flex;
    gap: 8px;
    padding: 12px 16px 0;
  }
`
