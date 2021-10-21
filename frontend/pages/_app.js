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
function s() {
  NProgress.start()
}
function d() {
  NProgress.done()
}
re.on(rcs, s)
re.on(rcc, d)
re.on(rce, d)


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
