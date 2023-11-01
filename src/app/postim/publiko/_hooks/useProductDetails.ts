import { UseFormReturn, useWatch } from "react-hook-form";
import {
  NewProductFormFields,
  NewProductSchemaType,
  newProductSchemaInitialValues
} from "../_formSchema";
import { PRODUCT_DETAIL_FIELD } from "opal/app/_shared/productTypes";
import { ZodError, ZodObject, ZodRawShape } from "zod";
import { buildDetailInputErrorPath } from "../_helpers/buildDetailInputErrorPath";
import get from "lodash.get";

export type SET_PRODUCT_DETAILS_FUNC = (content: string | boolean | number, type: PRODUCT_DETAIL_FIELD, extraDetailField?: string) => void;

export const useProductDetails = <T extends ZodRawShape>(
  form: UseFormReturn<NewProductSchemaType>,
  schema: ZodObject<T>
) => {
  const { control, setValue, getValues, setError, formState, clearErrors } = form;

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
    try {
      await schema.parseAsync(getValues(NewProductFormFields.details));

      const currentInputDetailNestedPath = buildDetailInputErrorPath(name.toString()) as NewProductFormFields;

      clearErrors(currentInputDetailNestedPath);
    } catch (throwenError) {
      const errors = throwenError as ZodError;
      const { fieldErrors } = errors.flatten();
      const currentError = fieldErrors?.[name];

      const oldErrors = formState.errors;
      const currentInputDetailNestedPath = buildDetailInputErrorPath(name.toString()) as NewProductFormFields;

      const hasCurrentInputError = get(oldErrors, currentInputDetailNestedPath);

      if (hasCurrentInputError) {
        clearErrors(currentInputDetailNestedPath);
      }

      if (currentError) {
        const errorMsg = currentError?.[0];
        if (errorMsg) {
          setError(currentInputDetailNestedPath, { message: errorMsg });
        }
      }
    }
  };

  return {
    details: productDetails,
    setDetails,
    onSimpleInputChange,
    onInputBlur
  }
}
