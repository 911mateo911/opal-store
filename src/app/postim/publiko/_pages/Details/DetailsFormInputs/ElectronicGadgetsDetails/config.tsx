import { PRODUCT_SUBCATEGORIES } from "@prisma/client";
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../../../_formSchema";
import { ComputersDetails } from "./ElectronicExtras/ComputersDetails";
import { SmartPhonesNConsoleDetails } from "./ElectronicExtras/SmartPhonesNConsoleDetails";
import { SelectValues } from "opal/app/_shared/atoms/Select";
import { TvSpecific } from "./ElectronicExtras/Specifics/TvSpecific";
import { z } from "zod";
import { PRODUCT_DETAIL_FIELD, TECH_PRODUCT_DETAILS } from "opal/app/_shared/productTypes";
import { PRODUCT_FORM_CONFIG } from "opal/app/postim/publiko/_config";

const COMPUTERS_SUBCATEGORIES: PRODUCT_SUBCATEGORIES[] = [
  PRODUCT_SUBCATEGORIES.ELECTRONICS__PC,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__PC,
  PRODUCT_SUBCATEGORIES.ELECTRONICS_PC_SETUP
];

const SMARTPHONES_CONSOLE_CATEGORIES: PRODUCT_SUBCATEGORIES[] = [
  PRODUCT_SUBCATEGORIES.ELECTRONICS__SMARTPHONES,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__TABLETS,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES
];

export const renderElectronicExtraFormComponents = (
  formSubcategory: PRODUCT_SUBCATEGORIES,
  form: UseFormReturn<NewProductSchemaType>
) => {
  if (COMPUTERS_SUBCATEGORIES.includes(formSubcategory)) {
    return (
      <ComputersDetails
        form={form}
        formSubcategory={formSubcategory}
      />
    );
  };

  if (SMARTPHONES_CONSOLE_CATEGORIES.includes(formSubcategory)) {
    return (
      <SmartPhonesNConsoleDetails
        form={form}
        formSubcategory={formSubcategory}
      />
    );
  };

  if (formSubcategory === PRODUCT_SUBCATEGORIES.ELECTRONICS__TVS) {
    return (
      <TvSpecific
        form={form}
      />
    )
  }

  return null;
};

enum TV_DETAILS_SCREEN_RES_TYPE {
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

// TODO: also validate the product condition
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

const electronicGadgetsExtraDetailsBaseSchema = z.object({
  [TECH_PRODUCT_DETAILS.CPU]: z.string().optional(),
  [TECH_PRODUCT_DETAILS.RAM]: z.string().optional(),
  [TECH_PRODUCT_DETAILS.GPU]: z.string().optional(),
  [TECH_PRODUCT_DETAILS.ROM]: z.string().optional()
});

const screenSizeSchema = z.string()
  .min(PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMin, {
    message: `Madhesia e ekranit nuk mund te jete me pak se ${PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMin} inch(")`
  })
  .max(PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMax, {
    message: `Madhesia e ekranit nuk mund te jete me shume se ${PRODUCT_FORM_CONFIG.electronicsScreenSizeInchMax} inch(")`
  });

// TODO: Add modal to explain why this is needed to better indexed
export const computersDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: electronicGadgetsExtraDetailsBaseSchema
});

export const laptopDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: electronicGadgetsExtraDetailsBaseSchema.extend({
    [TECH_PRODUCT_DETAILS.SCREEN_SIZE]: screenSizeSchema,
    [TECH_PRODUCT_DETAILS.WITH_CHARGER]: z.boolean()
  })
});

export const tvDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: electronicGadgetsExtraDetailsBaseSchema.extend({
    [TECH_PRODUCT_DETAILS.SCREEN_RES]: z.nativeEnum(TV_DETAILS_SCREEN_RES_TYPE),
    [TECH_PRODUCT_DETAILS.SCREEN_SIZE]: screenSizeSchema
  })
});

export const smarphonesNConsoleDetailsSchema = electronicGadgetsDetailsBaseSchema.extend({
  [PRODUCT_DETAIL_FIELD.ELECTRONICS_EXTRA]: z.object({
    [TECH_PRODUCT_DETAILS.ROM]: z.string().optional(),
    [TECH_PRODUCT_DETAILS.WITH_CHARGER]: z.boolean()
  })
});
