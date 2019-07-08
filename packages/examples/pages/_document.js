import Document, { Html, Head, Main, NextScript } from 'next/document'
import { css, reset } from './demo-2/jsx'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const utils = css()
    reset()
    return { ...initialProps, utils }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Pics of Billy</title>
          <style>{this.props.utils}</style>
        </Head>
        <body mode="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
