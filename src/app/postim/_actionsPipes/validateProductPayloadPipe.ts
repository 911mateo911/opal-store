'use server';

import { NewProductFormFields, NewProductSchemaType, newProductSchema } from "../publiko/_formSchema";

// TODO: not finished
export const validateProductPayloadPipe = async (payload: NewProductSchemaType) => {
  const validatedObject = await newProductSchema.omit({
    detailsId: true,
    formStep: true,
    hasNextStep: true
  }).parseAsync(payload);

  // ZOD fucks with images and its a fucking dogshit library
  return {
    ...validatedObject,
    [NewProductFormFields.images]: payload[NewProductFormFields.images]
  }
};
