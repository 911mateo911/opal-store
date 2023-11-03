import { MapSelectValues, SelectOption, SelectValues } from "opal/app/_shared/atoms/Select";
import { getFirstAndLastKeyInMap } from "opal/app/_shared/helpers";
import { PRODUCT_DETAIL_FIELD } from "opal/app/_shared/productTypes";
import { MappedKeysOfSchemaObject, ProductDetailsRenderData } from "opal/app/_shared/types";
import { z } from "zod";
import CarFuelIcon from 'opal/app/_shared/icons/details/autos/car_fuel.svg?url';
import CarMakeIcon from 'opal/app/_shared/icons/details/autos/car.svg?url';
import CarModelIcon from 'opal/app/_shared/icons/details/autos/car_model.svg?url';
import CarPlateIcon from 'opal/app/_shared/icons/details/autos/car_plate.svg?url';
import CarGearboxIcon from 'opal/app/_shared/icons/details/autos/car_gearbox.svg?url';
import CalendarIcon from 'opal/app/_shared/icons/calendar.svg?url';
import { PRODUCT_FORM_CONFIG } from "opal/app/_config";

export const currentYear = new Date().getFullYear();
const minYear = currentYear - 100;

export const CAR_DETAILS_YEAR_SELECT_OPTIONS: MapSelectValues<string> =
  Array(currentYear - minYear).fill('').reduce<Map<string, SelectOption<string>>>((map, __, index) => {
    const year = (currentYear - index).toString();

    map.set(year, {
      element: year,
      value: year
    });

    return map;
  }, new Map());

enum CAR_DETAILS_TRANSMISSION_TYPE {
  AUTOMATIC = 'AUTOMATIC',
  MANUAL = 'MANUAL',
  SEMI_AUTOMATIC = 'SEMI_AUTOMATIC'
};

export const CAR_DETAILS_TRANSMISSION_SELECT_OPTIONS: SelectValues<CAR_DETAILS_TRANSMISSION_TYPE> = {
  [CAR_DETAILS_TRANSMISSION_TYPE.AUTOMATIC]: {
    element: 'Automatik',
    value: CAR_DETAILS_TRANSMISSION_TYPE.AUTOMATIC
  },
  [CAR_DETAILS_TRANSMISSION_TYPE.MANUAL]: {
    element: 'Manual',
    value: CAR_DETAILS_TRANSMISSION_TYPE.MANUAL
  },
  [CAR_DETAILS_TRANSMISSION_TYPE.SEMI_AUTOMATIC]: {
    element: 'Gjysem Automatik',
    value: CAR_DETAILS_TRANSMISSION_TYPE.SEMI_AUTOMATIC
  },
};

enum CAR_DETAILS_FUEL_TYPE {
  GASOLINE = 'GASOLINE',
  DIESEL = 'DIESEL',
  HYBRID = 'HYBRID',
  ELECTRIC = 'ELECTRIC',
  ETHANOL = 'ETHANOL',
  GAS = 'GAS'
};

export const CAR_DETAILS_FUEL_TYPE_SELECT_OPTIONS: SelectValues<CAR_DETAILS_FUEL_TYPE> = {
  [CAR_DETAILS_FUEL_TYPE.GASOLINE]: {
    element: 'Benzine',
    value: CAR_DETAILS_FUEL_TYPE.GASOLINE
  },
  [CAR_DETAILS_FUEL_TYPE.DIESEL]: {
    element: 'Nafte',
    value: CAR_DETAILS_FUEL_TYPE.DIESEL
  },
  [CAR_DETAILS_FUEL_TYPE.HYBRID]: {
    element: 'Hibride',
    value: CAR_DETAILS_FUEL_TYPE.HYBRID
  },
  [CAR_DETAILS_FUEL_TYPE.ELECTRIC]: {
    element: 'Elektrike',
    value: CAR_DETAILS_FUEL_TYPE.ELECTRIC
  },
  [CAR_DETAILS_FUEL_TYPE.ETHANOL]: {
    element: 'Etanol',
    value: CAR_DETAILS_FUEL_TYPE.ETHANOL
  },
  [CAR_DETAILS_FUEL_TYPE.GAS]: {
    element: 'Gaz',
    value: CAR_DETAILS_FUEL_TYPE.GAS
  },
};

enum CAR_DETAILS_PLATE_TYPE {
  OUTSIDE = 'OUTSIDE',
  INSIDE = 'INSIDE'
};

export const CAR_DETAILS_PLATE_TYPE_SELECT_OPTIONS: SelectValues<CAR_DETAILS_PLATE_TYPE> = {
  [CAR_DETAILS_PLATE_TYPE.INSIDE]: {
    element: 'Shqiptare',
    value: CAR_DETAILS_PLATE_TYPE.INSIDE
  },
  [CAR_DETAILS_PLATE_TYPE.OUTSIDE]: {
    element: 'Te huaja',
    value: CAR_DETAILS_PLATE_TYPE.OUTSIDE
  },
};

const carYearLimits = getFirstAndLastKeyInMap(CAR_DETAILS_YEAR_SELECT_OPTIONS);

export const carDetailsSchema = z.object({
  [PRODUCT_DETAIL_FIELD.CAR_MAKE]: z.object({
    [PRODUCT_DETAIL_FIELD.CAR_MAKE]: z.string()
      .min(1, {
        message: 'Marka nuk mund te jete bosh.'
      })
      .max(PRODUCT_FORM_CONFIG.carMakeMaxLength, {
        message: `Marka duhet te jete max ${PRODUCT_FORM_CONFIG.carMakeMaxLength} karaktere.`
      })
  }),
  [PRODUCT_DETAIL_FIELD.CAR_MODEL]: z.object({
    [PRODUCT_DETAIL_FIELD.CAR_MODEL]: z.string()
      .min(1, {
        message: 'Modeli nuk mund te jete bosh.'
      })
      .max(PRODUCT_FORM_CONFIG.carModelMaxLength, {
        message: `Marka duhet te jete max ${PRODUCT_FORM_CONFIG.carModelMaxLength} karaktere.`
      })
  }),
  [PRODUCT_DETAIL_FIELD.CAR_YEAR]: z.object({
    [PRODUCT_DETAIL_FIELD.CAR_YEAR]: z.number()
      .min(Number(carYearLimits.firstKey), {
        message: `Automjeti nuk mund te jete me i vjeter se viti ${carYearLimits.firstKey}`
      })
      .max(Number(carYearLimits.lastKey), {
        message: `Automjeti nuk mund te jete me i ri se viti ${carYearLimits.lastKey}`
      })
  }),
  [PRODUCT_DETAIL_FIELD.CAR_TRANSMISSION]: z.object({
    [PRODUCT_DETAIL_FIELD.CAR_TRANSMISSION]: z.nativeEnum(CAR_DETAILS_TRANSMISSION_TYPE)
  }),
  [PRODUCT_DETAIL_FIELD.CAR_FUEL]: z.object({
    [PRODUCT_DETAIL_FIELD.CAR_FUEL]: z.nativeEnum(CAR_DETAILS_FUEL_TYPE)
  }),
  [PRODUCT_DETAIL_FIELD.CAR_PLATE]: z.object({
    [PRODUCT_DETAIL_FIELD.CAR_PLATE]: z.nativeEnum(CAR_DETAILS_PLATE_TYPE)
  }),
});

export const carDetailsSchemaInitialValue: z.infer<typeof carDetailsSchema> = {
  CAR_FUEL: {
    CAR_FUEL: CAR_DETAILS_FUEL_TYPE.DIESEL
  },
  CAR_MAKE: {
    CAR_MAKE: ''
  },
  CAR_MODEL: {
    CAR_MODEL: ''
  },
  CAR_PLATE: {
    CAR_PLATE: CAR_DETAILS_PLATE_TYPE.INSIDE
  },
  CAR_TRANSMISSION: {
    CAR_TRANSMISSION: CAR_DETAILS_TRANSMISSION_TYPE.AUTOMATIC
  },
  CAR_YEAR: {
    CAR_YEAR: currentYear
  }
};

export const carDetailsRenderDataMap: MappedKeysOfSchemaObject<typeof carDetailsSchema, ProductDetailsRenderData> = {
  CAR_MAKE: {
    detailName: 'Marka',
    iconSrc: CarMakeIcon,
  },
  CAR_MODEL: {
    detailName: 'Modeli',
    iconSrc: CarModelIcon
  },
  CAR_FUEL: {
    detailName: 'Karburanti',
    iconSrc: CarFuelIcon,
    selectValueMapping: CAR_DETAILS_FUEL_TYPE_SELECT_OPTIONS
  },
  CAR_YEAR: {
    detailName: 'Viti i prodhimit',
    iconSrc: CalendarIcon
  },
  CAR_TRANSMISSION: {
    detailName: 'Tranmisioni',
    iconSrc: CarGearboxIcon,
    selectValueMapping: CAR_DETAILS_TRANSMISSION_SELECT_OPTIONS
  },
  CAR_PLATE: {
    detailName: 'Targa',
    iconSrc: CarPlateIcon,
    selectValueMapping: CAR_DETAILS_PLATE_TYPE_SELECT_OPTIONS
  }
};
