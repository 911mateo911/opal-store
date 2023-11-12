import { PRODUCT_CATEGORIES, PRODUCT_SUBCATEGORIES } from "@prisma/client";
import { CarDetails } from "./CarDetails/CarDetails";
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../../_formSchema";
import { ApartmentDetails } from "./ApartmentDetails/ApartmentDetails";
import { ElectronicGadgetsDetails } from "./ElectronicGadgetsDetails/ElectronicGadgetsDetails";
import { PRODUCT_SUBCATEGORIES_MAP } from "../../../_subcategoriesMetaData";

const extractSubcategoriesNamesFromCategoryMap = (categoryMetaData: typeof PRODUCT_SUBCATEGORIES_MAP[PRODUCT_CATEGORIES]) => {
  return Object.values(categoryMetaData)
    .reduce<PRODUCT_SUBCATEGORIES[]>((prevValues, { hasNextStep, value }) => {
      if (hasNextStep) {
        return [
          ...prevValues,
          value
        ];
      };

      return prevValues;
    }, []);
}

const ELECTRONIC_SUBCATEGORIES_WITH_DETAILS_FORM = extractSubcategoriesNamesFromCategoryMap(
  PRODUCT_SUBCATEGORIES_MAP[PRODUCT_CATEGORIES.ELECTRONICS]
);

export const renderCurrentFormDetailsComponent = (
  formSubcategory: PRODUCT_SUBCATEGORIES,
  form: UseFormReturn<NewProductSchemaType>
) => {
  if (formSubcategory === PRODUCT_SUBCATEGORIES.CAR__CARS) {
    return <CarDetails form={form} />;
  };

  if (formSubcategory === PRODUCT_SUBCATEGORIES.APARTMENT__APARTMENT) {
    return <ApartmentDetails form={form} />
  };

  if (ELECTRONIC_SUBCATEGORIES_WITH_DETAILS_FORM.includes(formSubcategory)) {
    return <ElectronicGadgetsDetails form={form} formSubcategory={formSubcategory} />
  };

  return null;
}
