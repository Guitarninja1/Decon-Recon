import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
  const p = [
    { href: '/products', label: 'Products' },
    { href: '/sell', label: 'Sell' },
    { href: '/orders', label: 'Orders' },
    { href: '/account', label: 'Account' },
  ];

  function m(link) {
    return (
      <Link key={link.href} href={link.href}>
        {link.label}
      </Link>
    );
  }
  return <NavStyles>{p.map(m)}</NavStyles>;
}

export default Nav;
