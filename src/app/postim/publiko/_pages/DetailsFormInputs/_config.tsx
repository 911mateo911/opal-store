import { PRODUCT_SUBCATEGORIES } from "@prisma/client";
import { CarDetails } from "./CarDetails/CarDetails";
import { UseFormReturn } from "react-hook-form";
import { NewProductSchemaType } from "../../_formSchema";
import { ApartmentDetails } from "./ApartmentDetails/ApartmentDetails";

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

  return null;
}
