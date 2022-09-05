import { Global, ThemeProvider } from '@emotion/react'
import { globalStyle, theme } from '@/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
