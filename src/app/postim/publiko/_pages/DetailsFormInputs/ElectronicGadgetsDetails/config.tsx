import { PRODUCT_SUBCATEGORIES } from "@prisma/client";
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../../_formSchema";
import { ComputersDetails } from "./ElectronicExtras/ComputersDetails";
import { SmartPhonesDetails } from "./ElectronicExtras/SmartPhonesDetails";

const COMPUTERS_SUBCATEGORIES: PRODUCT_SUBCATEGORIES[] = [
  PRODUCT_SUBCATEGORIES.ELECTRONICS__PC,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__CONSOLES,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__LAPTOPS,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__PC
];

const SMARTPHONES_CATEGORIES: PRODUCT_SUBCATEGORIES[] = [
  PRODUCT_SUBCATEGORIES.ELECTRONICS__SMARTPHONES,
  PRODUCT_SUBCATEGORIES.ELECTRONICS__TABLETS
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
    )
  };

  if (SMARTPHONES_CATEGORIES.includes(formSubcategory)) {
    return (
      <SmartPhonesDetails
        form={form}
      />
    )
  }

  return null;
};