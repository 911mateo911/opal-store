import { z } from "zod";
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from "opal/app/_shared/productTypes";
import { PRODUCT_FORM_CONFIG } from "opal/app/_config";
import { MappedKeysOfSchemaObject, ProductDetailsRenderData } from "opal/app/_shared/types";
import ElectronicsMakeIcon from 'opal/app/_shared/icons/details/electronics/electronics_make.svg?url';

export const electronicGadgetsDetailsBaseSchema = z.object({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_MAKE]: z.object({
    [PRODUCT_DETAIL_FIELD.ELECTRONICS_MAKE]: z.string()
      .min(1, {
        message: 'Marka nuk mund te jete bosh.'
      })
      .max(PRODUCT_FORM_CONFIG.electronicsMakeMaxLength, {
        message: `Marka duhet te jete max ${PRODUCT_FORM_CONFIG.electronicsMakeMaxLength} karaktere.`
      })
  })
});

export const electronicGadgetsDetailsBaseSchemaInitialValue: z.infer<typeof electronicGadgetsDetailsBaseSchema> = {
  ELECTRONICS_MAKE: {
    ELECTRONICS_MAKE: ''
  }
};

export const electronicGadgetsDetailsRenderDataMap: MappedKeysOfSchemaObject<typeof electronicGadgetsDetailsBaseSchema, ProductDetailsRenderData> = {
  ELECTRONICS_MAKE: {
    detailName: 'Marka',
    iconSrc: ElectronicsMakeIcon
  }
};

export type ElectronicGadgetsDetailsRenderDataWrapperMap<T> = T & typeof electronicGadgetsDetailsRenderDataMap;

export const electronicGadgetsExtraDetailsBaseSchema = z.object({
  [TECH_PRODUCT_DETAILS.CPU]: z.string()
    .max(PRODUCT_FORM_CONFIG.techDetailsCpuMaxLength, {
      message: `CPU duhet te jete max ${PRODUCT_FORM_CONFIG.techDetailsCpuMaxLength} karaktere.`
    })
    .optional(),
  [TECH_PRODUCT_DETAILS.RAM]: z.number()
    .max(PRODUCT_FORM_CONFIG.techDetailsRamMaxValue, {
      message: `Kapaciteti i RAM nuk mund te jete > ${PRODUCT_FORM_CONFIG.techDetailsRamMaxValue}GB.`
    })
    .or(z.string())
    .optional(),
  [TECH_PRODUCT_DETAILS.GPU]: z.string()
    .max(PRODUCT_FORM_CONFIG.techDetailsGpuMaxLength, {
      message: `GPU duhet te jete max ${PRODUCT_FORM_CONFIG.techDetailsGpuMaxLength} karaktere.`
    })
    .optional(),
  [TECH_PRODUCT_DETAILS.ROM]: z.number()
    .max(PRODUCT_FORM_CONFIG.techDetailsRomMaxValue, {
      message: `Kapaciteti i harddisk nuk mund te jete > ${PRODUCT_FORM_CONFIG.techDetailsRomMaxValue}GB.`
    })
    .or(z.string())
    .optional(),
});

export const screenSizeSchema = z.number()
  .min(PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMin, {
    message: `Madhesia e ekranit nuk mund te jete me pak se ${PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMin}"(inch)`
  })
  .max(PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMax, {
    message: `Madhesia e ekranit nuk mund te jete me shume se ${PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMax}"(inch)`
  })
  .or(z.string())

