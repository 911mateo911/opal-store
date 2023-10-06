import { PRODUCT_SUBCATEGORIES } from "@prisma/client";
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../../_formSchema";
import { ComputersDetails } from "./ElectronicExtras/ComputersDetails";
import { SmartPhonesNConsoleDetails } from "./ElectronicExtras/SmartPhonesNConsoleDetails";
import { SelectValues } from "opal/app/_shared/atoms/Select";
import { TvSpecific } from "./ElectronicExtras/Specifics/TvSpecific";

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
}
