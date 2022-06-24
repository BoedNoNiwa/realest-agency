import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import Router from 'next/router'
import NProgress from 'nprogress'
import theme from '../theme'

export default function Document() {
    NProgress.configure({showSpinner: false})

    Router.events.on('routeChangeStart', () => {
      NProgress.start()
    })
  
    Router.events.on('routeChangeComplete', () => {
      NProgress.done()
    })
  return (
    <Html>
      <Head>
        <meta name='description' content="Looking for a property in Dubai? Realest Agency provide you with clear cut prices that you won't find anywhere" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}