'use server';

import { NewProductSchemaType, newProductSchema } from "../publiko/_formSchema";

// TODO: not finished
export const validateProductPayload = async (payload: NewProductSchemaType) => {
  return newProductSchema.parseAsync(payload, { async: true });
};
