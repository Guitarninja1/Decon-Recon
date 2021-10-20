/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import Page from '../components/Page';

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
