'use server';

import kebabCase from "lodash.kebabcase";
import {
  PolishedProductType,
  ProductTypeWithUploadedImages
} from "./types";
import { NewProductFormFields } from "../publiko/_formSchema";

// TODO: implement auth and fix below
export const polishProductPipe = async (product: ProductTypeWithUploadedImages): Promise<PolishedProductType> => {
  const price = product[NewProductFormFields.price].toString();
  const whatsapp = product[NewProductFormFields.whatsapp] ?? null;

  return Promise.resolve({
    ...product,
    slug: kebabCase(product[NewProductFormFields.title]),
    userId: 'Mateo_MALAJ',
    price: parseFloat(price),
    whatsapp
  });
}
