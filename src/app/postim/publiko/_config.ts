import { SelectValues } from "emeralb/app/_shared/atoms/Select";
import { PRODUCT_CATEGORIES, PRODUCT_CURRENCY } from '@prisma/client';

export const BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS: SelectValues<PRODUCT_CATEGORIES> = {
  APARTMENT: {
    element: 'Apartament/Shtepi',
    value: PRODUCT_CATEGORIES.APARTMENT
  },
  CAR: {
    element: 'Automjet',
    value: PRODUCT_CATEGORIES.CAR
  }
}

export const PRODUCT_CURRENCY_SELECT_OPTIONS: SelectValues<PRODUCT_CURRENCY> = {
  ALL: {
    element: 'Lek/ALL',
    value: PRODUCT_CURRENCY.ALL
  },
  EUR: {
    element: 'Euro/€',
    value: PRODUCT_CURRENCY.EUR
  },
  GBP: {
    element: 'Paund/£',
    value: PRODUCT_CURRENCY.GBP
  },
  USD: {
    element: 'Dollar/$',
    value: PRODUCT_CURRENCY.USD
  },
  OTHER: {
    element: 'Tjeter',
    value: PRODUCT_CURRENCY.OTHER
  }
}
