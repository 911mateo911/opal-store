export const formatMoney = (
  price: number
) => {
  return new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'ALL' }).format(price);
}
