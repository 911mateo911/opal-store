import { SelectOption, SelectValues } from "opal/app/_shared/atoms/Select";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_CONDITION,
  PRODUCT_CURRENCY,
  PRODUCT_PREFERRED_COMMUNICATION,
  PRODUCT_STATE,
} from '@prisma/client';
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "./_formSchema";

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

export const PRODUCT_STATE_SELECT_OPTIONS: SelectValues<PRODUCT_STATE> = {
  [PRODUCT_STATE.TO_SELL]: {
    element: 'Shes',
    value: PRODUCT_STATE.TO_SELL
  },
  [PRODUCT_STATE.TO_BUY]: {
    element: 'Blej',
    value: PRODUCT_STATE.TO_BUY
  },
  [PRODUCT_STATE.TO_LOAN]: {
    element: 'Le me qera',
    value: PRODUCT_STATE.TO_LOAN
  },
  [PRODUCT_STATE.TO_REQUEST_LOANING]: {
    element: 'Marr me qera',
    value: PRODUCT_STATE.TO_REQUEST_LOANING
  },
  [PRODUCT_STATE.TO_TRADE]: {
    element: 'Shkembej',
    value: PRODUCT_STATE.TO_TRADE
  }
}

export const PRODUCT_CONDITION_SELECT_OPTIONS: SelectValues<PRODUCT_CONDITION> = {
  [PRODUCT_CONDITION.NEW]: {
    element: 'E re',
    value: PRODUCT_CONDITION.NEW
  },
  [PRODUCT_CONDITION.USED]: {
    element: 'E perdorur',
    value: PRODUCT_CONDITION.USED
  },
  [PRODUCT_CONDITION.USED_LIKE_NEW]: {
    element: 'E perdorur, si e re',
    value: PRODUCT_CONDITION.USED_LIKE_NEW
  },
  [PRODUCT_CONDITION.USED_IN_GOOD_SHAPE]: {
    element: 'E perdorur ne gjendje te mire',
    value: PRODUCT_CONDITION.USED_IN_GOOD_SHAPE
  },
}

export interface ProductFormComponentBaseProps {
  form: UseFormReturn<NewProductSchemaType>
};

export const ALLOWED_IMAGE_TYPES = ['image/webp', 'image/png', 'image/jpeg'];

export const PRODUCT_FORM_IMAGE_PICKER_ID = 'image_picker';
