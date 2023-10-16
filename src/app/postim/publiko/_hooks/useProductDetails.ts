import { UseFormReturn, useWatch } from "react-hook-form";
import {
  NewProductFormFields,
  NewProductSchemaType,
  newProductSchemaInitialValues
} from "../_formSchema";
import { PRODUCT_DETAIL_FIELD } from "opal/app/_shared/productTypes";
import { ZodError, ZodObject, ZodRawShape, z } from "zod";
import { buildDetailInputErrorPath } from "../_helpers/buildDetailInputErrorPath";

export type SET_PRODUCT_DETAILS_FUNC = (content: string | boolean, type: PRODUCT_DETAIL_FIELD, extraDetailField?: string) => void;

export const useProductDetails = <T extends ZodRawShape>(
  form: UseFormReturn<NewProductSchemaType>,
  schema: ZodObject<T>
) => {
  const { control, setValue, getValues, setError } = form;

  const onSimpleInputChange = (value: string | boolean, field: NewProductFormFields) => {
    setValue(field, value);
  };

  const productDetails = useWatch({
    control,
    name: NewProductFormFields.details,
    defaultValue: newProductSchemaInitialValues[NewProductFormFields.details]
  });

  const setDetails: SET_PRODUCT_DETAILS_FUNC = (
    content,
    type,
    extraDetailField?
  ) => {
    const currentDetails = getValues(NewProductFormFields.details);
    const currentSubcategoryDetails = currentDetails[type];

    const newSubcategoryDetailsPayload: typeof currentSubcategoryDetails = {
      ...currentSubcategoryDetails
    };

    if (extraDetailField) {
      newSubcategoryDetailsPayload[extraDetailField] = content;
    } else {
      newSubcategoryDetailsPayload[type] = content;
    };

    const newProductDetailsPayload: NewProductSchemaType['details'] = {
      ...currentDetails,
      [type]: newSubcategoryDetailsPayload
    };

    setValue(NewProductFormFields.details, {
      ...currentDetails,
      ...newProductDetailsPayload
    });
  };

  const onInputBlur = async (name: keyof T) => {
    schema.parseAsync(getValues(NewProductFormFields.details))
      .catch((errors: ZodError) => {
        const { fieldErrors } = errors.flatten();
        const currentError = fieldErrors?.[name];

        if (currentError) {
          const errorMsg = currentError?.[0];
          if (errorMsg) {
            const basePath = buildDetailInputErrorPath(name.toString()) as NewProductFormFields
            setError(basePath, { message: errorMsg });
          }
        }
      })
  };

  return {
    details: productDetails,
    setDetails,
    onSimpleInputChange,
    onInputBlur
  }
}
