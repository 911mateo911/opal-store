'use server';

import { NewProductSchemaType, newProductSchema } from "../publiko/_formSchema";

// TODO: not finished
export const validateProductPayloadPipe = async (payload: NewProductSchemaType) => {
  return newProductSchema.parseAsync(payload);
};
