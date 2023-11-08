import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from "opal/app/_shared/productTypes";
import {
  ElectronicGadgetsDetailsRenderDataWrapperMap,
  electronicGadgetsDetailsBaseSchema,
  electronicGadgetsDetailsBaseSchemaInitialValue,
  electronicGadgetsDetailsRenderDataMap,
  electronicGadgetsExtraDetailsBaseSchema
} from "../config";
import { z } from 'zod';
import { ProductDetailsRenderDataMap } from "opal/app/_shared/types";
import ElectronicsCpuIcon from 'opal/app/_shared/icons/details/electronics/electronics_cpu.svg?url';
import ElectronicsGpuIcon from 'opal/app/_shared/icons/details/electronics/electronics_gpu.svg?url';
import ElectronicsRamIcon from 'opal/app/_shared/icons/details/electronics/electronics_ram.svg?url';
import ElectronicsRomIcon from 'opal/app/_shared/icons/details/electronics/electronics_rom.svg?url';
import ElectronicsChargerIcon from 'opal/app/_shared/icons/details/electronics/electronics_charger.svg?url';
import { PRODUCT_FORM_CONFIG } from "opal/app/_config";

export const computersDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: electronicGadgetsExtraDetailsBaseSchema
});

export const computersDetailsSchemaInitialValue: z.infer<typeof computersDetailsSchema> = {
  ...electronicGadgetsDetailsBaseSchemaInitialValue,
  ELECTRONICS_EXTRA: {
    CPU: '',
    GPU: '',
    RAM: '',
    ROM: ''
  }
};

// WHAT THE FUCK IS GOOD TYPING RRRAAAAAH
export const computersDetailsRenderDataMap:
  ElectronicGadgetsDetailsRenderDataWrapperMap<
    ProductDetailsRenderDataMap<keyof z.infer<typeof electronicGadgetsExtraDetailsBaseSchema>>
  > = {
  CPU: {
    detailName: 'Processori',
    iconSrc: ElectronicsCpuIcon,
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA
  },
  GPU: {
    detailName: 'Karta Grafike',
    iconSrc: ElectronicsGpuIcon,
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA
  },
  RAM: {
    detailName: 'Ram',
    iconSrc: ElectronicsRamIcon,
    metricUnit: '(GB)',
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA
  },
  ROM: {
    detailName: 'Kapaciteti ruajtes',
    iconSrc: ElectronicsRomIcon,
    metricUnit: '(GB)',
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA
  },
  ...electronicGadgetsDetailsRenderDataMap
};

const smartphonesNConsoleDetailsExtraSchema = z.object({
  [TECH_PRODUCT_DETAILS.ROM]: z.number()
    .max(PRODUCT_FORM_CONFIG.techDetailsRomMaxValue, {
      message: `Kapaciteti i harddisk nuk mund te jete > ${PRODUCT_FORM_CONFIG.techDetailsRomMaxValue}GB.`
    })
    .or(z.string())
    .optional(),
  [TECH_PRODUCT_DETAILS.WITH_CHARGER]: z.boolean()
});

export const smartphonesNConsoleDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: smartphonesNConsoleDetailsExtraSchema
});

// WHAT THE FUCK IS GOOD TYPING RRRAAAAAH
export const smartphonesNConsoleDetailsRenderDataMap:
  ElectronicGadgetsDetailsRenderDataWrapperMap<
    ProductDetailsRenderDataMap<keyof z.infer<typeof smartphonesNConsoleDetailsExtraSchema>>
  > = {
  ROM: {
    detailName: 'Kapaciteti ruajtes',
    iconSrc: ElectronicsRomIcon,
    metricUnit: '(GB)',
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA
  },
  WITH_CHARGER: {
    detailName: 'Karikues/Ushqyes',
    iconSrc: ElectronicsChargerIcon,
    boolValueMapping: {
      truthy: 'Me karikues',
      false: 'Pa karikues'
    },
    extraField: PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA
  },
  ...electronicGadgetsDetailsRenderDataMap
}

export const smartphonesNConsoleDetailsSchemaInitialValue: z.infer<typeof smartphonesNConsoleDetailsSchema> = {
  ...electronicGadgetsDetailsBaseSchemaInitialValue,
  ELECTRONICS_EXTRA: {
    WITH_CHARGER: false,
    ROM: ''
  }
};
