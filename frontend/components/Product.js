/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

function Product(hug) {
  const p = hug.product;
  return (
    <ItemStyles>
      <img src={p?.photo?.image?.publicUrlTransformed} alt={p.name} />
      <Title>
        <Link href={`/product/${p.id}`}>{p.name}</Link>
      </Title>
      <PriceTag>{formatMoney(p.price)}</PriceTag>
      <p>{p.description}</p>
    </ItemStyles>
  );
}

export default Product;
