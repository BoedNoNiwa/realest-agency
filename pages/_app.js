import '../styles/globals.css'
import Head from 'next/head'
import {ChakraProvider}  from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../theme'


function MyApp({ Component, pageProps }) {


  return (
    <>
    <Head>
    <title>Realest</title>
    </Head>
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </>
  )
}

export default MyApp
