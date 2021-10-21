import Link from 'next/link';

function Nav() {
  const p = [
    { href: '/products', label: 'Products' },
    { href: '/sell', label: 'Sell' },
    { href: '/orders', label: 'Orders' },
    { href: '/account', label: 'Account' },
  ];
  return (
    <nav>
      {p.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
