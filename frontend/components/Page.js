import PropTypes from 'prop-types';
import Header from './Header';

function Page(bone) {
  const C = bone.children;
  return (
    <div>
      <Header />
      <h1>Page Component</h1>
      {C}
    </div>
  );
}
Page.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.node,
};
export default Page;
