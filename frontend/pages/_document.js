import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps(ham) {
    const h = ham.renderPage;
    const sheet = new ServerStyleSheet();
    const page = h(function (App) {
      return function (props) {
        const a = <App {...props} />;
        return sheet.collectStyles(a);
      };
    });
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
