'use server';

import asyncPipe from "opal/app/_shared/asyncPipe";
import { validateProductPayloadPipe } from "./validateProductPayloadPipe";
import { uploadProductImagesPipe } from "./uploadProductImagesPipe";
import { uploadProductPipe } from "./uploadProductPipe";
import { polishProductPipe } from "./polishProductPipe";
import { convertFormDataToProduct } from "./productToSerializableToProduct";

// TODO: extend if you want extra info
export const uploadAction = async (product: FormData) => {
  try {
    const uploadProductPipeline = asyncPipe(
      convertFormDataToProduct,
      validateProductPayloadPipe,
      uploadProductImagesPipe,
      polishProductPipe,
      uploadProductPipe
    );

    const uploadedProduct = await uploadProductPipeline(Promise.resolve(product));

    return 'matoe'
  } catch (error) {

    console.error(error)
    return ''
  }
}
