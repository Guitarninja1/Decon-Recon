/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Page from '../components/Page';
import NProgress from 'nprogress'
import Router from 'next/router'
import '../components/styles/nprogress.css'

const rcs = 'routeChangeStart';
const rcc = 'routeChangeComplete';
const rce = 'routeChangeError';
const re = Router.events;
re.on(rcs, () => NProgress.start())
re.on(rcc, () => NProgress.done())
re.on(rce, () => NProgress.done())


function MyApp(ham) {
  const p = ham.pageProps;
  const C = ham.Component;
  return (
    <Page>
      <C {...p} />
    </Page>
  );
}
MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
