import { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

export default function Document() {
  return (
    <Html>
      {/* <Head /> */}
      <Head>
        <title>Safe Painness</title>
        <link rel="icon" href="/static/logo.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
