import { UseFormReturn, useWatch } from "react-hook-form";
import {
  NewProductFormFields,
  NewProductSchemaType,
  newProductSchemaInitialValues
} from "../_formSchema";
import { ProductDetail } from "emeralb/app/_shared/productTypes";

export const useProductDetails = (form: UseFormReturn<NewProductSchemaType>) => {
  const { control, setValue, getValues } = form;

  const productDetails = useWatch({
    control,
    name: NewProductFormFields.details,
    defaultValue: newProductSchemaInitialValues[NewProductFormFields.details]
  });

  const setDetails = (detail: ProductDetail) => {
    const currentDetails = getValues(NewProductFormFields.details);
    // setValue(NewProductFormFields.deta)
  }

  return {
    details: productDetails
  }
}
