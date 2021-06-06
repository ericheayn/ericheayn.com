import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="container">
      <Head>
        <title>Eric Heayn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
