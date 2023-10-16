import { NewProductFormFields } from "../_formSchema";

export function buildDetailInputErrorPath(inputName: string) {
  return `${NewProductFormFields.details}.${inputName}`;
};
