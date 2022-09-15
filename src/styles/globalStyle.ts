import { css } from '@emotion/react'
import theme from './theme'

const globalStyle = css`
  @font-face {
    font-family: 'Eulyoo1945-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2102-01@1.0/Eulyoo1945-SemiBold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Eulyoo1945', serif;
  }

  html {
    font-family: 'Eulyoo1945', serif;
  }

  @media screen and (max-width: 768px) {
    html {
      font-size: 13px;
    }
  }

  body {
    font-family: 'Eulyoo1945', serif;
    background-color: ${theme.color.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a,
  button,
  textarea {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }

  button:focus,
  button:active,
  input:focus,
  input:active,
  textarea:focus,
  textarea:active {
    outline: none;
  }
`

export default globalStyle
