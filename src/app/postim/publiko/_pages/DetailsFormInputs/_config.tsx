import { PRODUCT_CATEGORIES, PRODUCT_SUBCATEGORIES } from "@prisma/client";
import { CarDetails } from "./CarDetails/CarDetails";
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../_formSchema";
import { ApartmentDetails } from "./ApartmentDetails/ApartmentDetails";
import { PRODUCT_SUBCATEGORIES_MAP } from "../../_config";
import { ElectronicGadgetsDetails } from "./ElectronicGadgetsDetails/ElectronicGadgetsDetails";

const ELECTRONIC_SUBCATEGORIES_WITH_DETAILS_FORM = Object.values(PRODUCT_SUBCATEGORIES_MAP[PRODUCT_CATEGORIES.ELECTRONICS])
  .reduce<PRODUCT_SUBCATEGORIES[]>((prevValues, { hasNextStep, value }) => {
    if (hasNextStep) {
      return [
        ...prevValues,
        value
      ];
    };

    return prevValues;
  }, []);

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
