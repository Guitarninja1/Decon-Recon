function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };
  const am = amount % 100 === 0;
  if (am) options.minimumFractionDigits = 0;
  const e = 'en-US';
  const formatter = new Intl.NumberFormat(e, options);
  const a = amount / 100;
  return formatter.format(a);
}

export default formatMoney;
