import { SelectOption, SelectValues } from "opal/app/_shared/atoms/Select";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_CONDITION,
  PRODUCT_CURRENCY,
  PRODUCT_PREFERRED_COMMUNICATION,
  PRODUCT_STATE,
  PRODUCT_SUBCATEGORIES
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

interface ProductSubCategoryMetaData {
  hasNextStep?: boolean;
};

type ExtendedProductSubcategoryWithDataSelectOption<T extends string> = Partial<Record<T, SelectOption<T> & ProductSubCategoryMetaData>>;

type PRODUCT_SUBCATEGORIES_MAP_BY_CATEGORY = Record<PRODUCT_CATEGORIES, ExtendedProductSubcategoryWithDataSelectOption<PRODUCT_SUBCATEGORIES>>;

export const PRODUCT_SUBCATEGORIES_MAP: PRODUCT_SUBCATEGORIES_MAP_BY_CATEGORY = {
  [PRODUCT_CATEGORIES.APARTMENT]: {
    [PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT]: {
      element: 'Apartament',
      value: PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.APARTMENT__AREA]: {
      element: 'Zone/Toke',
      value: PRODUCT_SUBCATEGORIES.APARTMENT__AREA
    },
    [PRODUCT_SUBCATEGORIES.APARTMENT__HOUSE]: {
      element: 'Shtepi',
      value: PRODUCT_SUBCATEGORIES.APARTMENT__HOUSE
    },
    [PRODUCT_SUBCATEGORIES.APARTMENT__KIOSKS]: {
      element: 'Kioska',
      value: PRODUCT_SUBCATEGORIES.APARTMENT__KIOSKS
    },
    [PRODUCT_SUBCATEGORIES.APARTMENT__VILLA]: {
      element: 'Vila',
      value: PRODUCT_SUBCATEGORIES.APARTMENT__VILLA
    }
  },
  [PRODUCT_CATEGORIES.BUSINESS]: {
    [PRODUCT_SUBCATEGORIES.BUSINESS__BUSINESS_AREAS]: {
      element: 'Zone biznesi',
      value: PRODUCT_SUBCATEGORIES.BUSINESS__BUSINESS_AREAS
    },
    [PRODUCT_SUBCATEGORIES.BUSINESS__BUSINESS_FURNITURE]: {
      element: 'Pajisje/ Biznesi',
      value: PRODUCT_SUBCATEGORIES.BUSINESS__BUSINESS_FURNITURE
    },
    [PRODUCT_SUBCATEGORIES.BUSINESS__BUSINESS_SERVICES]: {
      element: 'Sherbime',
      value: PRODUCT_SUBCATEGORIES.BUSINESS__BUSINESS_SERVICES
    }
  },
  [PRODUCT_CATEGORIES.CAR]: {
    [PRODUCT_SUBCATEGORIES.CAR__BIKE_SCOOTER_PARTS]: {
      element: 'Pjese motorrash/skuterash',
      value: PRODUCT_SUBCATEGORIES.CAR__BIKE_SCOOTER_PARTS
    },
    [PRODUCT_SUBCATEGORIES.CAR__BOATS_AND_NAVY]: {
      element: 'Mjete detare dhe pjese',
      value: PRODUCT_SUBCATEGORIES.CAR__BOATS_AND_NAVY
    },
    [PRODUCT_SUBCATEGORIES.CAR__CAMPING_AUTO]: {
      element: 'Makina Camping/Outdoors',
      value: PRODUCT_SUBCATEGORIES.CAR__CAMPING_AUTO
    },
    [PRODUCT_SUBCATEGORIES.CAR__CARS]: {
      element: 'Makina',
      value: PRODUCT_SUBCATEGORIES.CAR__CARS,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.CAR__CAR_PARTS]: {
      element: 'Pjese makinash',
      value: PRODUCT_SUBCATEGORIES.CAR__CAR_PARTS
    },
    [PRODUCT_SUBCATEGORIES.CAR__FARMING_AUTO]: {
      element: 'Makineri Bujqesore',
      value: PRODUCT_SUBCATEGORIES.CAR__FARMING_AUTO
    },
    [PRODUCT_SUBCATEGORIES.CAR__HEAVY_DUTY_MACHINES]: {
      element: 'Makineri te renda',
      value: PRODUCT_SUBCATEGORIES.CAR__HEAVY_DUTY_MACHINES
    },
    [PRODUCT_SUBCATEGORIES.CAR__MOTORBIKE]: {
      element: 'Motorra',
      value: PRODUCT_SUBCATEGORIES.CAR__MOTORBIKE
    },
    [PRODUCT_SUBCATEGORIES.CAR__SCOOTER]: {
      element: 'Skuter',
      value: PRODUCT_SUBCATEGORIES.CAR__SCOOTER
    },
    [PRODUCT_SUBCATEGORIES.CAR__TOTALED_AUTO_PARTS]: {
      element: 'Mjete vetem per pjese',
      value: PRODUCT_SUBCATEGORIES.CAR__TOTALED_AUTO_PARTS
    }
  },
  [PRODUCT_CATEGORIES.ELECTRONICS]: {
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__ACCESSORIES]: {
      element: 'Aksesore Elektronik',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__ACCESSORIES,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__AUDIO]: {
      element: 'Pajisje Audio',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__AUDIO,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES]: {
      element: 'Gaming dhe konsola',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__IOT]: {
      element: 'IOT/Pajisje Smart',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__IOT,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS]: {
      element: 'Laptope',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__PC]: {
      element: 'PC/Kompjuter',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__PC,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__SMARTPHONES]: {
      element: 'Smartphone',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__SMARTPHONES,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__SMART_PARTS]: {
      element: 'Pjese kembimi elektronike',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__SMART_PARTS
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__TABLETS]: {
      element: 'Tablete',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__TABLETS,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__TVS]: {
      element: 'Televizore',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__TVS,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS_PC_SETUP]: {
      element: 'Setup PC',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS_PC_SETUP,
      hasNextStep: true
    }
  },
  [PRODUCT_CATEGORIES.HEALTH]: {
    [PRODUCT_SUBCATEGORIES.HEALTH__GYM_SUPPLEMENTS]: {
      element: 'Suplemente Palestre',
      value: PRODUCT_SUBCATEGORIES.HEALTH__GYM_SUPPLEMENTS,
      hasNextStep: true
    },
    [PRODUCT_SUBCATEGORIES.HEALTH__HEALTH_CONTENT]: {
      element: 'Shendeti',
      value: PRODUCT_SUBCATEGORIES.HEALTH__HEALTH_CONTENT
    },
    [PRODUCT_SUBCATEGORIES.HEALTH__HEALTH_MACHINES]: {
      element: 'Pajisje mjekesore',
      value: PRODUCT_SUBCATEGORIES.HEALTH__HEALTH_MACHINES
    }
  },
  [PRODUCT_CATEGORIES.HOUSEHOLDS_AND_FAMILY]: {
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__CHILDREN]: {
      element: 'Femije',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__CHILDREN
    },
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_BATHROOM]: {
      element: 'Pajisje Tualeti',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_BATHROOM
    },
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_DECOR]: {
      element: 'Dekor',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_DECOR
    },
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_FURNITURES]: {
      element: 'Pajisje shtepiake',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_FURNITURES
    },
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_KITCHEN]: {
      element: 'Kuzhina',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_KITCHEN
    },
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_PARTS]: {
      element: 'Orendi',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__HOUSE_PARTS
    },
    [PRODUCT_SUBCATEGORIES.HOUSEHOLDS__INDOOR_MACHINES]: {
      element: 'Makineri indoors',
      value: PRODUCT_SUBCATEGORIES.HOUSEHOLDS__INDOOR_MACHINES
    }
  },
  [PRODUCT_CATEGORIES.JOBS]: {
    [PRODUCT_SUBCATEGORIES.JOBS__FULL_TIME]: {
      element: 'Pune full-time',
      value: PRODUCT_SUBCATEGORIES.JOBS__FULL_TIME
    },
    [PRODUCT_SUBCATEGORIES.JOBS__PART_TIME]: {
      element: 'Pune part-time',
      value: PRODUCT_SUBCATEGORIES.JOBS__PART_TIME
    }
  },
  [PRODUCT_CATEGORIES.SPORTS]: {
    [PRODUCT_SUBCATEGORIES.SPORTS__GYM_EQUIPMENT]: {
      element: 'Pajisje Palestre',
      value: PRODUCT_SUBCATEGORIES.SPORTS__GYM_EQUIPMENT
    },
    [PRODUCT_SUBCATEGORIES.SPORTS__OUTDOOR_EQUIPMENT]: {
      element: 'Pajisje sportive outdoors',
      value: PRODUCT_SUBCATEGORIES.SPORTS__OUTDOOR_EQUIPMENT
    }
  }
};

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

export enum PRODUCT_FORM_STEPS {
  GENERAL_FORM,
  DETAILS_FORM,
  VERIFY_AND_PUBLISH,
  SHARE
};

export interface ProductFormComponentBaseProps {
  form: UseFormReturn<NewProductSchemaType>
};

export const ALLOWED_IMAGE_TYPES = ['image/webp', 'image/png', 'image/jpeg'];

export const PRODUCT_FORM_IMAGE_PICKER_ID = 'image_picker';

interface PRODUCT_FORM_CONFIG_TYPE {
  titleMaxLength: number;
  descMaxLength: number;
  apartmentSqAreaMax: number;
  carMakeMaxLength: number;
  carModelMaxLength: number;
};

export const PRODUCT_FORM_CONFIG: PRODUCT_FORM_CONFIG_TYPE = {
  titleMaxLength: 3000,
  descMaxLength: 8000,
  apartmentSqAreaMax: 999999,
  carMakeMaxLength: 15,
  carModelMaxLength: 20
};
