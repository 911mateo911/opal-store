import { z } from 'zod';
import {
  ElectronicGadgetsDetailsRenderDataWrapperMap,
  electronicGadgetsDetailsBaseSchema,
  electronicGadgetsDetailsBaseSchemaInitialValue,
  electronicGadgetsDetailsRenderDataMap,
  electronicGadgetsExtraDetailsBaseSchema,
  screenSizeSchema
} from '../../config';
import {
  PRODUCT_DETAIL_FIELD,
  TECH_PRODUCT_DETAILS
} from 'opal/app/_shared/productTypes';
import { SelectValues } from 'opal/app/_shared/atoms/Select';
import { ProductDetailsRenderDataMap } from 'opal/app/_shared/types';
import { computersDetailsRenderDataMap } from '../config';
import ElectronicsChargerIcon from 'opal/app/_shared/icons/details/electronics/electronics_charger.svg?url';
import ElectronicsDisplayIcon from 'opal/app/_shared/icons/details/electronics/electronics_display.svg?url';

export enum TV_DETAILS_SCREEN_RES_TYPE {
  SD = 'SD',
  HD_720 = 'HD_720',
  HD_1080 = 'HD_1080',
  UHD_4K = 'UHD_4K',
  UHD_8K = 'UHD_8K'
};

export const TV_DETAILS_SCREEN_RES_TYPE_SELECT_OPTIONS: SelectValues<TV_DETAILS_SCREEN_RES_TYPE> = {
  [TV_DETAILS_SCREEN_RES_TYPE.SD]: {
    element: 'Standard (480p)',
    value: TV_DETAILS_SCREEN_RES_TYPE.SD
  },
  [TV_DETAILS_SCREEN_RES_TYPE.HD_720]: {
    element: 'HD (720p)',
    value: TV_DETAILS_SCREEN_RES_TYPE.HD_720
  },
  [TV_DETAILS_SCREEN_RES_TYPE.HD_1080]: {
    element: 'HD (1080p)',
    value: TV_DETAILS_SCREEN_RES_TYPE.HD_1080
  },
  [TV_DETAILS_SCREEN_RES_TYPE.UHD_4K]: {
    element: 'UHD (4k)',
    value: TV_DETAILS_SCREEN_RES_TYPE.UHD_4K
  },
  [TV_DETAILS_SCREEN_RES_TYPE.UHD_8K]: {
    element: 'UHD (8k)',
    value: TV_DETAILS_SCREEN_RES_TYPE.UHD_8K
  },
};

const laptopDetailsExtraSchema = {
  [TECH_PRODUCT_DETAILS.SCREEN_SIZE]: screenSizeSchema,
  [TECH_PRODUCT_DETAILS.WITH_CHARGER]: z.boolean()
};

export const laptopDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: electronicGadgetsExtraDetailsBaseSchema.extend(laptopDetailsExtraSchema)
});

export const laptopDetailsSchemaInitialValue: z.infer<typeof laptopDetailsSchema> = {
  ...electronicGadgetsDetailsBaseSchemaInitialValue,
  ELECTRONICS_EXTRA: {
    CPU: '',
    SCREEN_SIZE: '',
    WITH_CHARGER: false,
    GPU: '',
    RAM: '',
    ROM: ''
  }
};

export const laptopsDetailsRenderDataMap: ElectronicGadgetsDetailsRenderDataWrapperMap<
  ProductDetailsRenderDataMap<keyof (z.infer<typeof electronicGadgetsExtraDetailsBaseSchema> & typeof laptopDetailsExtraSchema)>
> = {
  ...computersDetailsRenderDataMap,
  ...electronicGadgetsDetailsRenderDataMap,
  WITH_CHARGER: {
    detailName: 'Karikues/Ushqyes',
    iconSrc: ElectronicsChargerIcon,
    boolValueMapping: {
      truthy: 'Me karikues',
      false: 'Pa karikues'
    },
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA,
    hide: false
  },
  SCREEN_SIZE: {
    detailName: 'Madhesia e ekranit',
    iconSrc: ElectronicsDisplayIcon,
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA,
    metricUnit: `"(inch)`
  }
}

export const tvDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: electronicGadgetsExtraDetailsBaseSchema.extend({
    [TECH_PRODUCT_DETAILS.SCREEN_RES]: z.nativeEnum(TV_DETAILS_SCREEN_RES_TYPE),
    [TECH_PRODUCT_DETAILS.SCREEN_SIZE]: screenSizeSchema
  })
});

export const tvDetailsSchemaInitialValue: z.infer<typeof tvDetailsSchema> = {
  ...electronicGadgetsDetailsBaseSchemaInitialValue,
  ELECTRONICS_EXTRA: {
    SCREEN_RES: TV_DETAILS_SCREEN_RES_TYPE.HD_1080,
    SCREEN_SIZE: '',
    CPU: '',
    GPU: '',
    RAM: '',
    ROM: ''
  }
};
