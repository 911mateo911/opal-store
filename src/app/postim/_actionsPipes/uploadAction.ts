'use server';

import asyncPipe from "opal/app/_shared/asyncPipe";
import { NewProductSchemaType } from "../publiko/_formSchema";
import { validateProductPayloadPipe } from "./validateProductPayloadPipe";
import { uploadProductImagesPipe } from "./uploadProductImagesPipe";
import { uploadProductPipe } from "./uploadProductPipe";
import { polishProductPipe } from "./polishProductPipe";

// TODO: extend if you want extra info
export const uploadAction = async (product: NewProductSchemaType) => {
  try {
    const uploadProductPipeline = asyncPipe(
      validateProductPayloadPipe,
      uploadProductImagesPipe,
      polishProductPipe,
      uploadProductPipe
    );

    const uploadedProduct = await uploadProductPipeline(Promise.resolve(product));

    return uploadedProduct;
  } catch (error) {
    return {
      error
    };
  }
}
