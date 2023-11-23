import { createFormatter } from "next-intl";

const nextFormatter = createFormatter({ locale: 'en-US' });

export const formatMoney = (
  price: number
) => {
  return nextFormatter.number(price, { style: 'currency', currency: 'ALL' })
}
