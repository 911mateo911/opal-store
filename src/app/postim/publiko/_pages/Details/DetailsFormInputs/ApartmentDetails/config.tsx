import { z } from "zod";
import { SelectValues } from "opal/app/_shared/atoms/Select";
import { PRODUCT_DETAIL_FIELD } from "opal/app/_shared/productTypes";
import { MappedKeysOfSchemaObject, ProductDetailsRenderData } from "opal/app/_shared/types";
import { PRODUCT_FORM_CONFIG } from "opal/app/postim/publiko/_formSchema";
import BuildingIcon from 'opal/app/_shared/icons/details/building.svg?url';
import DimensionsIcon from 'opal/app/_shared/icons/details/dimensions.svg?url';
import FurnitureIcon from 'opal/app/_shared/icons/details/furniture.svg?url';
import RoomIcon from 'opal/app/_shared/icons/details/room.svg?url';

export enum APARTMENT_FLOOR_TYPE {
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

export enum APARTMENT_ROOMS_TYPE {
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

export const apartmentDetailsSchema = z.object({
  [PRODUCT_DETAIL_FIELD.APARTMENT_FLOORS]: z.object({
    [PRODUCT_DETAIL_FIELD.APARTMENT_FLOORS]: z.nativeEnum(APARTMENT_FLOOR_TYPE)
  }),
  [PRODUCT_DETAIL_FIELD.APARTMENT_ROOMS]: z.object({
    [PRODUCT_DETAIL_FIELD.APARTMENT_ROOMS]: z.nativeEnum(APARTMENT_ROOMS_TYPE)
  }),
  [PRODUCT_DETAIL_FIELD.APARTMENT_FURNITURE]: z.object({
    [PRODUCT_DETAIL_FIELD.APARTMENT_FURNITURE]: z.boolean()
  }),
  [PRODUCT_DETAIL_FIELD.APARTMENT_SQAREA]: z.object({
    [PRODUCT_DETAIL_FIELD.APARTMENT_SQAREA]: z.number()
      .min(0, {
        message: 'Siperfaqja nuk mund te jete 0.'
      })
      .max(PRODUCT_FORM_CONFIG.apartmentSqAreaMax, {
        message: `Siperfaqja nuk mund te jete > ${PRODUCT_FORM_CONFIG.apartmentSqAreaMax}m2.`
      })
      .or(z.string())
      .refine(price => {
        if (typeof price === 'string' && !price.length) {
          return false;
        };

        return true;
      }, { message: 'Siperfaqja nuk mund te jete bosh' }),
  })
});

export const apartmentDetailsSchemaInitialValue: z.infer<typeof apartmentDetailsSchema> = {
  APARTMENT_FLOORS: {
    APARTMENT_FLOORS: APARTMENT_FLOOR_TYPE.FLOORS_1
  },
  APARTMENT_FURNITURE: {
    APARTMENT_FURNITURE: false
  },
  APARTMENT_ROOMS: {
    APARTMENT_ROOMS: APARTMENT_ROOMS_TYPE.ROOMS_1
  },
  APARTMENT_SQAREA: {
    APARTMENT_SQAREA: ''
  }
};

// TODO: add translations
export const apartamentDetailsRenderDataMap: MappedKeysOfSchemaObject<typeof apartmentDetailsSchema, ProductDetailsRenderData> = {
  APARTMENT_SQAREA: {
    detailName: 'Siperfaqja',
    iconSrc: DimensionsIcon,
    metricUnit: '(m2)'
  },
  APARTMENT_FLOORS: {
    detailName: 'Kate',
    iconSrc: BuildingIcon,
    selectValueMapping: APARTMENT_FLOOR_TYPE_SELECT_OPTIONS
  },
  APARTMENT_ROOMS: {
    detailName: 'Dhoma',
    iconSrc: RoomIcon,
    selectValueMapping: APARTMENT_ROOMS_TYPE_SELECT_OPTIONS,
    metricUnit: 'dhoma'
  },
  APARTMENT_FURNITURE: {
    detailName: 'Mobilimi',
    iconSrc: FurnitureIcon,
    boolValueMapping: {
      truthy: 'E mobiluar',
      false: 'E pa mobiluar'
    }
  }
};
