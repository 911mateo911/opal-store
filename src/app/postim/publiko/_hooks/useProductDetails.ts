import { UseFormReturn } from "react-hook-form";
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
  const { setValue, getValues, setError, formState, clearErrors } = form;

  const productDetails = getValues(NewProductFormFields.details) || newProductSchemaInitialValues[NewProductFormFields.details];

  const onSimpleInputChange = (value: string | boolean | number, field: NewProductFormFields) => {
    setValue(field, value);
  };

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

  const onInputBlur = async (name: keyof T | string, context?: string) => {
    const normalizedName = name.toString();
    const inputPath = context ? `${context}.${normalizedName}` : normalizedName;

    try {
      await schema.parseAsync(getValues(NewProductFormFields.details));

      const currentInputDetailNestedPath = buildDetailInputErrorPath(inputPath) as NewProductFormFields;

      clearErrors(currentInputDetailNestedPath);
    } catch (throwenError) {
      const errors = throwenError as ZodError;
      const { fieldErrors } = errors.flatten();
      let currentError = fieldErrors?.[name];

      if (context) {
        const foundDeepError = errors.issues.find(({ path }) => inputPath === path.join('.'));
        if (foundDeepError) {
          currentError = [foundDeepError.message];
        };
      };

      const oldErrors = formState.errors;
      const currentInputDetailNestedPath = buildDetailInputErrorPath(inputPath) as NewProductFormFields;

      const hasCurrentInputError = get(oldErrors, currentInputDetailNestedPath);

      if (hasCurrentInputError) {
        clearErrors(currentInputDetailNestedPath);
      };

      if (currentError) {
        const errorMsg = currentError?.[0];
        if (errorMsg) {
          setError(currentInputDetailNestedPath, { message: errorMsg });
        };
      };
    };
  };

  return {
    details: productDetails,
    setDetails,
    onSimpleInputChange,
    onInputBlur
  }
}
