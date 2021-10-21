import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps(ham) {
    const h = ham.renderPage
    const sheet = new ServerStyleSheet();
    function a(App) { 
      function p(props) { 
        const a = <App {...props} />
        const b = sheet.collectStyles(a)
        return b
      }
      return p
    }
    const page = h(a);
    const styleTags = sheet.getStyleElement();
    const z = { ...page, styleTags };
    return z;
  };
  render() {
    return (
      <Html lang="en-US">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
