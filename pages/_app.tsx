import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Head from 'next/head'
import theme from '@/theme/theme'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
