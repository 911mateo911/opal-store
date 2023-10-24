import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../../../_formSchema";
import { ComputersDetails } from "./ElectronicExtras/ComputersDetails";
import { SmartPhonesNConsoleDetails } from "./ElectronicExtras/SmartPhonesNConsoleDetails";
import { TvSpecific } from "./ElectronicExtras/Specifics/TvSpecific";
import { PRODUCT_SUBCATEGORIES } from "@prisma/client";

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
