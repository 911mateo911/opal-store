import { PRODUCT_CATEGORIES, PRODUCT_SUBCATEGORIES } from "@prisma/client";
import {
  apartamentDetailsRenderDataMap,
  apartmentDetailsSchemaInitialValue
} from "./_pages/Details/DetailsFormInputs/ApartmentDetails/config";
import { carDetailsSchemaInitialValue } from "./_pages/Details/DetailsFormInputs/CarDetails/config";
import {
  computersDetailsSchemaInitialValue,
  electronicGadgetsDetailsBaseSchemaInitialValue,
  laptopDetailsSchemaInitialValue,
  smartphonesNConsoleDetailsSchemaInitialValue,
  tvDetailsSchemaInitialValue
} from "./_pages/Details/DetailsFormInputs/ElectronicGadgetsDetails/config";
import { SelectOption } from "opal/app/_shared/atoms/Select";
import { ProductDetailsRenderData, ProductDetailsRenderDataMap } from "opal/app/_shared/types";

export interface ProductSubCategoryMetaData<T extends string> extends SelectOption<T> {
  hasNextStep?: boolean;
  // keeps track of the initial values of each subcategory
  initialValues?: Record<string, Record<string, string | number | boolean>>;
  detailsRenderData?: ProductDetailsRenderDataMap<keyof this['initialValues'] | string>
};

type ExtendedProductSubcategoryWithDataSelectOption<T extends string> = Partial<Record<T, ProductSubCategoryMetaData<T>>>;

type PRODUCT_SUBCATEGORIES_MAP_BY_CATEGORY = Record<PRODUCT_CATEGORIES, ExtendedProductSubcategoryWithDataSelectOption<PRODUCT_SUBCATEGORIES>>;

export const PRODUCT_SUBCATEGORIES_MAP: PRODUCT_SUBCATEGORIES_MAP_BY_CATEGORY = {
  [PRODUCT_CATEGORIES.APARTMENT]: {
    [PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT]: {
      element: 'Apartament',
      value: PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT,
      hasNextStep: true,
      initialValues: apartmentDetailsSchemaInitialValue,
      detailsRenderData: apartamentDetailsRenderDataMap
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
      hasNextStep: true,
      initialValues: carDetailsSchemaInitialValue
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
      hasNextStep: true,
      initialValues: electronicGadgetsDetailsBaseSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__AUDIO]: {
      element: 'Pajisje Audio',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__AUDIO,
      hasNextStep: true,
      initialValues: electronicGadgetsDetailsBaseSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES]: {
      element: 'Gaming dhe konsola',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES,
      hasNextStep: true,
      initialValues: smartphonesNConsoleDetailsSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__IOT]: {
      element: 'IOT/Pajisje Smart',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__IOT,
      hasNextStep: true,
      initialValues: electronicGadgetsDetailsBaseSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS]: {
      element: 'Laptope',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS,
      hasNextStep: true,
      initialValues: laptopDetailsSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__PC]: {
      element: 'PC/Kompjuter',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__PC,
      hasNextStep: true,
      initialValues: computersDetailsSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__SMARTPHONES]: {
      element: 'Smartphone',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__SMARTPHONES,
      hasNextStep: true,
      initialValues: smartphonesNConsoleDetailsSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__SMART_PARTS]: {
      element: 'Pjese kembimi elektronike',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__SMART_PARTS,
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__TABLETS]: {
      element: 'Tablete',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__TABLETS,
      hasNextStep: true,
      initialValues: smartphonesNConsoleDetailsSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS__TVS]: {
      element: 'Televizore',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS__TVS,
      hasNextStep: true,
      initialValues: tvDetailsSchemaInitialValue
    },
    [PRODUCT_SUBCATEGORIES.ELECTRONICS_PC_SETUP]: {
      element: 'Setup PC',
      value: PRODUCT_SUBCATEGORIES.ELECTRONICS_PC_SETUP,
      hasNextStep: true,
      initialValues: computersDetailsSchemaInitialValue
    }
  },
  [PRODUCT_CATEGORIES.HEALTH]: {
    [PRODUCT_SUBCATEGORIES.HEALTH__GYM_SUPPLEMENTS]: {
      element: 'Suplemente Palestre',
      value: PRODUCT_SUBCATEGORIES.HEALTH__GYM_SUPPLEMENTS,
      // TODO: dont forget to add initial value here
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
