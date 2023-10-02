import { MapSelectValues, SelectOption, SelectValues } from "opal/app/_shared/atoms/Select";

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
}

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
}

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
}
