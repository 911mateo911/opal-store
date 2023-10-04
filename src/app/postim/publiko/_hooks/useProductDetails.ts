import { UseFormReturn, useWatch } from "react-hook-form";
import {
  NewProductFormFields,
  NewProductSchemaType,
  newProductSchemaInitialValues
} from "../_formSchema";
import { PRODUCT_DETAIL_FIELD } from "opal/app/_shared/productTypes";

export const useProductDetails = (form: UseFormReturn<NewProductSchemaType>) => {
  const { control, setValue, getValues } = form;

  const onSimpleInputChange = (value: string | boolean, field: NewProductFormFields) => {
    setValue(field, value);
  };

  const productDetails = useWatch({
    control,
    name: NewProductFormFields.details,
    defaultValue: newProductSchemaInitialValues[NewProductFormFields.details]
  });

  const setDetails = (content: string | boolean, type: PRODUCT_DETAIL_FIELD) => {
    const currentDetails = getValues(NewProductFormFields.details);
    setValue(NewProductFormFields.details, {
      ...currentDetails,
      [type]: content
    })
  }

  return {
    details: productDetails,
    setDetails,
    onSimpleInputChange
  }
}
