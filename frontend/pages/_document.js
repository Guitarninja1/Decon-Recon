import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
