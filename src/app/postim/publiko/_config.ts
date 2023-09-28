import { SelectValues } from "emeralb/app/_shared/atoms/Select";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_CURRENCY,
  PRODUCT_PREFERRED_COMMUNICATION
} from '@prisma/client';

export const BASE_PRODUCT_CATEGORIES_SELECT_OPTIONS: SelectValues<PRODUCT_CATEGORIES> = {
  APARTMENT: {
    element: 'Apartament/Shtepi',
    value: PRODUCT_CATEGORIES.APARTMENT
  },
  CAR: {
    element: 'Automjet',
    value: PRODUCT_CATEGORIES.CAR
  },
  BUSINESS: {
    element: 'Biznes',
    value: PRODUCT_CATEGORIES.BUSINESS
  },
  ELECTRONICS: {
    element: 'Elektronike',
    value: PRODUCT_CATEGORIES.ELECTRONICS
  },
  HEALTH: {
    element: 'Shendeti',
    value: PRODUCT_CATEGORIES.HEALTH
  },
  HOUSEHOLDS_AND_FAMILY: {
    element: 'Familje dhe paisje',
    value: PRODUCT_CATEGORIES.HOUSEHOLDS_AND_FAMILY
  },
  JOBS: {
    element: 'Pune',
    value: PRODUCT_CATEGORIES.JOBS
  },
  SPORTS: {
    element: 'Sporte',
    value: PRODUCT_CATEGORIES.SPORTS
  }
};

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
};

export const PREFERRED_COMMUNICATION_SELECT_OPTIONS: SelectValues<PRODUCT_PREFERRED_COMMUNICATION> = {
  EMAIL: {
    element: 'Email',
    value: PRODUCT_PREFERRED_COMMUNICATION.EMAIL
  },
  TEL: {
    element: 'Telefon/Celular',
    value: PRODUCT_PREFERRED_COMMUNICATION.TEL
  },
  WHATSAPP: {
    element: 'Whatsapp',
    value: PRODUCT_PREFERRED_COMMUNICATION.WHATSAPP
  }
};

export const ALLOWED_IMAGE_TYPES = ['image/webp', 'image/png', 'image/jpeg'];

export const PRODUCT_FORM_IMAGE_PICKER_ID = 'image_picker';

interface PRODUCT_FORM_CONFIG_TYPE {
  titleMaxLength: number;
  descMaxLength: number;
}

export const PRODUCT_FORM_CONFIG: PRODUCT_FORM_CONFIG_TYPE = {
  titleMaxLength: 3000,
  descMaxLength: 8000
};
