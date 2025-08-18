import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --brand: #E66767;
    --brand-700: #C55555;
    --bg: #FFF8F7;
    --text: #4A4A4A;
    --card: #FFFFFF;
    --shadow: rgba(0, 0, 0, 0.08);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; }
  body {
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
    background: var(--bg);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  img { max-width: 100%; display: block; }
  button { cursor: pointer; border: 0; background: none; }
  input, button { font: inherit; }
`

export default GlobalStyles
