import NextNProgress from 'nextjs-progressbar'
import Head from 'next/head'
import React from 'react'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { MuiThemeProvider } from '../themes'
import createEmotionCache from '../createEmotionCache'
import Web3Context from '@/web3/context'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <link rel="icon" href="favicon.svg" />
          <link rel="apple-touch-icon" href="favicon.svg" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="keywords" content="" />
          <meta name="description" content="" />
        </Head>
        <Web3Context>
          <MuiThemeProvider>
            <NextNProgress color="primary" height={2} />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </Web3Context>
      </CacheProvider>
    </>
  )
}

export default App
