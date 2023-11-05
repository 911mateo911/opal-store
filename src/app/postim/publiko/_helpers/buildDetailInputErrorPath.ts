import { NewProductFormFields } from "../_formSchema";

export function buildDetailInputErrorPath(inputName: string, { extraField }: { extraField?: string } = {}) {
  const errorPath = `${NewProductFormFields.details}.${inputName}`;

  if (extraField) {
    return `${errorPath}.${extraField}`;
  }
  return errorPath;
};
