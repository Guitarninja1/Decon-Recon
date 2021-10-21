import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      <h1>Page Component</h1>
      {children}
    </div>
  );
}
Page.propTypes = {
  children: PropTypes.node,
};
export default Page;
