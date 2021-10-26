/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

const rcs = 'routeChangeStart';
const rcc = 'routeChangeComplete';
const rce = 'routeChangeError';
const re = Router.events;
re.on(rcs, () => NProgress.start());
re.on(rcc, () => NProgress.done());
re.on(rce, () => NProgress.done());

function MyApp(ham) {
  const p = ham.pageProps;
  const C = ham.Component;
  const a = ham.apollo;
  console.log(a);
  return (
    <ApolloProvider client={a}>
      <Page>
        <C {...p} />
      </Page>
    </ApolloProvider>
  );
}
MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

MyApp.getInitialProps = async function (bone) {
  const C = bone.Component;
  const ct = bone.ctx;
  let pageProps = {};
  if (C.getInitialProps) {
    pageProps = await C.getInitialProps(ct);
  }
  pageProps.query = ct.query;
  return { pageProps };
};

export default withData(MyApp);
