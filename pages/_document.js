import { Html, Head, Main, NextScript } from 'next/document'

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
