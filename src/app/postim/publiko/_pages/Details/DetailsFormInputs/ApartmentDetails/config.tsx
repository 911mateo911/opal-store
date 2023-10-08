import { SelectValues } from "opal/app/_shared/atoms/Select";

enum APARTMENT_FLOOR_TYPE {
  FLOORS_1 = 'FLOORS_1',
  FLOORS_2 = 'FLOORS_2',
  FLOORS_3 = 'FLOORS_3',
  FLOORS_4 = 'FLOORS_4',
  FLOORS_MORE_THAN_4 = 'FLOORS_MORE_THAN_4'
};

export const APARTMENT_FLOOR_TYPE_SELECT_OPTIONS: SelectValues<APARTMENT_FLOOR_TYPE> = {
  [APARTMENT_FLOOR_TYPE.FLOORS_1]: {
    element: '1 kat',
    value: APARTMENT_FLOOR_TYPE.FLOORS_1
  },
  [APARTMENT_FLOOR_TYPE.FLOORS_2]: {
    element: '2 kate',
    value: APARTMENT_FLOOR_TYPE.FLOORS_2
  },
  [APARTMENT_FLOOR_TYPE.FLOORS_3]: {
    element: '3 kate',
    value: APARTMENT_FLOOR_TYPE.FLOORS_3
  },
  [APARTMENT_FLOOR_TYPE.FLOORS_4]: {
    element: '4 kate',
    value: APARTMENT_FLOOR_TYPE.FLOORS_4
  },
  [APARTMENT_FLOOR_TYPE.FLOORS_MORE_THAN_4]: {
    element: 'Me shume se 4 kate',
    value: APARTMENT_FLOOR_TYPE.FLOORS_MORE_THAN_4
  }
};

enum APARTMENT_ROOMS_TYPE {
  ROOMS_1 = 'ROOMS_1',
  ROOMS_2 = 'ROOMS_2',
  ROOMS_3 = 'ROOMS_3',
  ROOMS_4 = 'ROOMS_4',
  ROOMS_5 = 'ROOMS_5',
  ROOMS_6 = 'ROOMS_6',
  ROOMS_7 = 'ROOMS_7',
  ROOMS_8 = 'ROOMS_8',
  ROOMS_MORE_THAN_8 = 'ROOMS_MORE_THAN_8',
};

export const APARTMENT_ROOMS_TYPE_SELECT_OPTIONS: SelectValues<APARTMENT_ROOMS_TYPE> = {
  [APARTMENT_ROOMS_TYPE.ROOMS_1]: {
    element: '1',
    value: APARTMENT_ROOMS_TYPE.ROOMS_1
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_2]: {
    element: '2',
    value: APARTMENT_ROOMS_TYPE.ROOMS_2
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_3]: {
    element: '3',
    value: APARTMENT_ROOMS_TYPE.ROOMS_3
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_4]: {
    element: '4',
    value: APARTMENT_ROOMS_TYPE.ROOMS_4
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_5]: {
    element: '5',
    value: APARTMENT_ROOMS_TYPE.ROOMS_5
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_6]: {
    element: '6',
    value: APARTMENT_ROOMS_TYPE.ROOMS_6
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_7]: {
    element: '7',
    value: APARTMENT_ROOMS_TYPE.ROOMS_7
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_8]: {
    element: '8',
    value: APARTMENT_ROOMS_TYPE.ROOMS_8
  },
  [APARTMENT_ROOMS_TYPE.ROOMS_MORE_THAN_8]: {
    element: 'Me shume se 8 dhoma',
    value: APARTMENT_ROOMS_TYPE.ROOMS_MORE_THAN_8
  },
};
